import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName');
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
    if (!fullName || !email || !projectDescription) {
      return NextResponse.json({ error: 'Full Name, Email, and Project Description are required.' }, { status: 400 });
    }

    let logoUrl = null;
    if (logoFile && logoFile.size > 0) {
      const fileExt = logoFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `design_logos/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('design-requirements-logos') // Ensure this bucket exists in Supabase Storage
        .upload(filePath, logoFile, { cacheControl: '3600', upsert: false });

      if (uploadError) {
        console.error('Supabase upload error:', uploadError);
        return NextResponse.json({ error: 'Failed to upload logo.' }, { status: 500 });
      }
      logoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/design-requirements-logos/${filePath}`;
    }

    const { data, error } = await supabase
      .from('design_requirements')
      .insert([
        {
          full_name: fullName,
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
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save design requirements.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Design requirements submitted successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing design requirements:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
