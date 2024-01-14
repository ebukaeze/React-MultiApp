import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

function EditContact() {
  const contact = useLoaderData();
  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          type="text"
          name="first"
          aria-label="first Name"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          type="text"
          aria-label="Last Name"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <br />
      <label for="twitter">
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@victor"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

export default EditContact;
