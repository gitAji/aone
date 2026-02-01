import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const docRef = doc(db, 'design_requirements', id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return NextResponse.json({ error: 'Design requirement not found.' }, { status: 404 });
      }

      return NextResponse.json({ id: docSnap.id, ...docSnap.data() }, { status: 200 });
    } else {
      const querySnapshot = await getDocs(collection(db, 'design_requirements'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error('Error processing fetch request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
