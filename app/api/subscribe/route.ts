import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    // The frontend sends the data in a Mailchimp-friendly format.
    // The new payload includes email_address, status, merge_fields, and tags.
    // We will destructure these fields directly from the request body.
    const { email_address, status, merge_fields, tags } = await request.json();

    // Basic validation to ensure an email address is provided.
    if (!email_address) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }

    // Prepare the request body for the Mailchimp API.
    const requestBody = {
      email_address: email_address,
      status: status, // e.g., "subscribed"
      merge_fields: merge_fields, // e.g., { FNAME: "John", LNAME: "Doe" }
      tags: tags,
    };

    console.log('Sending this payload to Mailchimp:', JSON.stringify(requestBody, null, 2));

    // Retrieve the Mailchimp API key and Audience ID from environment variables.
    // You must set these in your .env.local file.
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    // The API key format for Mailchimp is "API_KEY-DATACENTER".
    // The datacenter is the last part of the API key string (e.g., us1, us2, etc.).
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
      return NextResponse.json({ error: 'Mailchimp configuration is missing.' }, { status: 500 });
    } else {
      const [, datacenter] = MAILCHIMP_API_KEY.split('-');

      if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
        return NextResponse.json({ error: 'Server configuration error: Mailchimp API key or Audience ID missing.' }, { status: 500 });
      }

      // Construct the Mailchimp API URL.
      const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

      // Make the secure POST request to the Mailchimp API.
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Mailchimp uses Basic Auth with any username and the API key as the password.
          'Authorization': `auth ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the API response.
      const data = await response.json();

      if (response.ok) {
        // If the response is successful, you can also add a tag in a separate call if needed.
        const addTagResponse = await fetch(`${url}/${email_address}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `auth ${MAILCHIMP_API_KEY}`,
          },
          body: JSON.stringify({ tags: tags }),
        });

        if (addTagResponse.ok) {
          return NextResponse.json({ success: true, message: 'Successfully subscribed and tagged!' }, { status: 200 });
        } else {
          console.error('Failed to add tags:', await addTagResponse.json());
          return NextResponse.json({ success: true, message: 'Successfully subscribed, but failed to add tags.' }, { status: 200 });
        }
      } else {
        // Mailchimp's API returns specific error messages that you can pass back to the frontend.
        return NextResponse.json({ error: data.title || 'Mailchimp API error' }, { status: response.status });
      }
    }
  } catch (error) {
    console.error('An internal server error occurred:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}