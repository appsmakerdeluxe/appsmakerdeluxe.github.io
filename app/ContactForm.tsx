"use client";

import { useState } from "react";

const RECIPIENT_EMAIL = "appsmakerdeluxe@gmail.com";

type MailClient = "default" | "gmail" | "outlook" | "yahoo";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Allgemeine Frage");
  const [message, setMessage] = useState("");
  const [client, setClient] = useState<MailClient>("default");
  const [copied, setCopied] = useState(false);

  const formatSubject = () => {
    const prefix = "[AppsMakerDeluxe Kontakt]";
    return `${prefix} ${category}${name ? ` - von ${name}` : ""}`;
  };

  const formatBody = () => {
    return `Hallo AppsMakerDeluxe Studios Team,

${message}

---
Absender: ${name || "Nicht angegeben"}
Kontakt E-Mail: ${email || "Nicht angegeben"}
Thema: ${category}`;
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
    const fullText = `An: ${RECIPIENT_EMAIL}
Betreff: ${formatSubject()}

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
          Ihr Name
          <input
            type="text"
            name="name"
            placeholder="z. B. Alex Weber"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Ihre E-Mail-Adresse
          <input
            type="email"
            name="email"
            placeholder="ihre.adresse@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Thema / Anliegen
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Allgemeine Frage">Allgemeine Anfrage</option>
            <option value="App-Support & Feedback">App-Support & Feedback</option>
            <option value="Feature-Vorschlag">Feature-Vorschlag / Idee</option>
            <option value="Kooperation & Presse">Kooperation & Presse</option>
          </select>
        </label>

        <label>
          E-Mail-Programm / Dienst
          <select
            name="client"
            value={client}
            onChange={(e) => setClient(e.target.value as MailClient)}
          >
            <option value="default">Standard E-Mail-App (Outlook, Mail, etc.)</option>
            <option value="gmail">Gmail im Browser öffnen</option>
            <option value="outlook">Outlook / Hotmail Web öffnen</option>
            <option value="yahoo">Yahoo Mail im Browser öffnen</option>
          </select>
        </label>
      </div>

      <label>
        Ihre Nachricht
        <textarea
          name="message"
          rows={5}
          placeholder="Wie können wir helfen oder worum geht es?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className="contact-actions">
        <button type="submit" className="button primary submit-btn">
          E-Mail vorbereiten & senden <span aria-hidden="true">↗</span>
        </button>
        <button
          type="button"
          className="button ghost copy-btn"
          onClick={handleCopy}
          title="Nachrichtentext mit Empfänger in Zwischenablage kopieren"
        >
          {copied ? "In Zwischenablage kopiert! ✓" : "Text kopieren 📋"}
        </button>
      </div>

      <p className="form-note">
        Direktkontakt: <a href={`mailto:${RECIPIENT_EMAIL}`} className="direct-mail">{RECIPIENT_EMAIL}</a>
        <br />
        Die Nachricht wird in Ihrem gewählten E-Mail-Dienst mit allen Angaben vorformatiert geöffnet.
      </p>
    </form>
  );
}
