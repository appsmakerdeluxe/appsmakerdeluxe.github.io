"use client";

import React, { useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

const RECIPIENT_EMAIL = "appsmakerdeluxe@gmail.com";

type MailClient = "default" | "gmail" | "outlook" | "yahoo";

export default function ContactForm() {
  const { t, isRtl } = useLanguage();
  const formT = t.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [message, setMessage] = useState("");
  const [client, setClient] = useState<MailClient>("default");
  const [copied, setCopied] = useState(false);

  const getCategoryTitle = () => {
    switch (category) {
      case "support":
        return formT.topicSupport;
      case "feature":
        return formT.topicFeature;
      case "collab":
        return formT.topicCollab;
      case "general":
      default:
        return formT.topicGeneral;
    }
  };

  const formatSubject = () => {
    return `${formT.emailSubjectPrefix} ${getCategoryTitle()}${
      name ? ` - ${name}` : ""
    }`;
  };

  const formatBody = () => {
    return `${formT.emailGreeting}

${message}

---
${formT.emailSender} ${name || formT.notSpecified}
${formT.emailContact} ${email || formT.notSpecified}
${formT.emailTopic} ${getCategoryTitle()}`;
  };

  const getMailUrl = (targetClient: MailClient) => {
    const subject = encodeURIComponent(formatSubject());
    const body = encodeURIComponent(formatBody());

    switch (targetClient) {
      case "gmail":
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;
      case "outlook":
        return `https://outlook.live.com/mail/0/deeplink/compose?to=${RECIPIENT_EMAIL}&subject=${subject}&body=${body}`;
      case "yahoo":
        return `https://compose.mail.yahoo.com/?to=${RECIPIENT_EMAIL}&subj=${subject}&body=${body}`;
      case "default":
      default:
        return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getMailUrl(client);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    const fullText = `An / To: ${RECIPIENT_EMAIL}
Betreff / Subject: ${formatSubject()}

${formatBody()}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          {formT.nameLabel}
          <input
            type="text"
            name="name"
            placeholder={formT.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          {formT.emailLabel}
          <input
            type="email"
            name="email"
            placeholder={formT.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          {formT.topicLabel}
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">{formT.topicGeneral}</option>
            <option value="support">{formT.topicSupport}</option>
            <option value="feature">{formT.topicFeature}</option>
            <option value="collab">{formT.topicCollab}</option>
          </select>
        </label>

        <label>
          {formT.clientLabel}
          <select
            name="client"
            value={client}
            onChange={(e) => setClient(e.target.value as MailClient)}
          >
            <option value="default">{formT.clientDefault}</option>
            <option value="gmail">{formT.clientGmail}</option>
            <option value="outlook">{formT.clientOutlook}</option>
            <option value="yahoo">{formT.clientYahoo}</option>
          </select>
        </label>
      </div>

      <label>
        {formT.messageLabel}
        <textarea
          name="message"
          rows={5}
          placeholder={formT.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className="contact-actions">
        <button type="submit" className="button primary submit-btn">
          {formT.submitButton}{" "}
          <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
        </button>
        <button
          type="button"
          className="button ghost copy-btn"
          onClick={handleCopy}
          title={formT.copyButton}
        >
          {copied ? formT.copiedSuccess : formT.copyButton}
        </button>
      </div>

      <p className="form-note">
        {formT.directContact}{" "}
        <a href={`mailto:${RECIPIENT_EMAIL}`} className="direct-mail">
          {RECIPIENT_EMAIL}
        </a>
        <br />
        {formT.clientNote}
      </p>
    </form>
  );
}
