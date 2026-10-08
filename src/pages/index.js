import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const sections = [
  {
    title: 'Swift Resources',
    links: [
      { label: 'Swift Wiki', href: '/docs/xcode/' },
      { label: 'Example Projects', href: '/docs/examples/' },
    ]
  }
];

export default function Home() {
  return (
    <Layout
      title="Swiftpedia"
      description="A local knowledge base for Swift 6 + Swift UI development">
      <main className="vfx-main-page">
        <header className="vfx-hero">
          <span className="vfx-badge">Swift 6 · SwiftUI</span>
          <Heading as="h1" className="vfx-hero-title">
            <span className="brand-gold">Swift</span>
            <span className="brand-plain">pedia</span>
          </Heading>
          <p className="vfx-hero-sub">
            A local knowledge base for Swift 6 + Swift UI development
          </p>
          <div className="vfx-btn-row">
            <Link className="button button--primary button--lg" to="/docs/about">
              Browse the Wiki
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/xcode/">
              Swift &amp; Xcode
            </Link>
          </div>
        </header>
        <div className="vfx-sections-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="vfx-section-card">
              <h3 className="vfx-section-title">{section.title}</h3>
              <ul className="vfx-section-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
