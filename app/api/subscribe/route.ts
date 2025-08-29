import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    const { email_address, status, merge_fields, tags } = await request.json();

    if (!email_address) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
      return NextResponse.json({ error: 'Mailchimp configuration is missing.' }, { status: 500 });
    }

    const datacenter = MAILCHIMP_API_KEY.split('-')[1];
    const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const requestBody = {
      email_address: email_address,
      status: status,
      merge_fields: merge_fields,
      // Include tags directly in the initial request body.
      tags: tags,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Correct authorization header format
        'Authorization': `Basic ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok) {
      // The member has been successfully added or updated, with tags.
      return NextResponse.json({ success: true, message: 'Successfully subscribed and tagged!' }, { status: 200 });
    } else {
      // Pass the Mailchimp error back to the frontend.
      return NextResponse.json({ error: data.title || 'Mailchimp API error' }, { status: response.status });
    }
  } catch (error) {
    console.error('An internal server error occurred:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}