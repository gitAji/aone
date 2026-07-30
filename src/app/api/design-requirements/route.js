import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const contactPerson = formData.get('contactPerson');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const companyName = formData.get('companyName');
    const primaryColor = formData.get('primaryColor');
    const secondaryColor = formData.get('secondaryColor');
    const accentColor = formData.get('accentColor');
    const primaryFont = formData.get('primaryFont');
    const secondaryFont = formData.get('secondaryFont');
    const headerRequirements = formData.get('headerRequirements');
    const footerRequirements = formData.get('footerRequirements');
    const navigationRequirements = formData.get('navigationRequirements');
    const otherSectionsRequirements = formData.get('otherSectionsRequirements');
    const projectDescription = formData.get('projectDescription');
    const additionalNotes = formData.get('additionalNotes');
    const logoFile = formData.get('logo');

    // Basic validation
    if (!contactPerson || !email || !projectDescription) {
      return NextResponse.json({ error: 'Contact Person, Email, and Project Description are required.' }, { status: 400 });
    }

    let logoUrl = null;
    if (logoFile && logoFile.size > 0) {
      const fileExt = logoFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const storageRef = ref(storage, `design_logos/${fileName}`);

      const buffer = Buffer.from(await logoFile.arrayBuffer());
      await uploadBytes(storageRef, buffer, { contentType: logoFile.type });
      logoUrl = await getDownloadURL(storageRef);
    }

    const docRef = await addDoc(collection(db, 'design_requirements'), {
      full_name: contactPerson,
      email,
      phone,
      company_name: companyName,
      logo_url: logoUrl,
      primary_color: primaryColor,
      secondary_color: secondaryColor,
      accent_color: accentColor,
      primary_font: primaryFont,
      secondary_font: secondaryFont,
      header_requirements: headerRequirements ? { content: headerRequirements } : null,
      footer_requirements: footerRequirements ? { content: footerRequirements } : null,
      navigation_requirements: navigationRequirements ? { content: navigationRequirements } : null,
      other_sections_requirements: otherSectionsRequirements ? { content: otherSectionsRequirements } : null,
      project_description: projectDescription,
      additional_notes: additionalNotes,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Design Requirements: ${contactPerson}`,
      text: `
        New design requirements have been submitted.
        
        Name: ${contactPerson}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${companyName || 'N/A'}
        Logo: ${logoUrl || 'No logo uploaded'}
        
        --- STYLE ---
        Colors: ${primaryColor}, ${secondaryColor}, ${accentColor}
        Fonts: ${primaryFont}, ${secondaryFont}
        
        --- REQUIREMENTS ---
        Description: ${projectDescription}
        Header: ${headerRequirements}
        Footer: ${footerRequirements}
        Navigation: ${navigationRequirements}
        Others: ${otherSectionsRequirements}
        Notes: ${additionalNotes || 'N/A'}
      `
    });

    return NextResponse.json({
      message: 'Design requirements submitted successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing design requirements:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
