import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

export class GolfCourseCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      location: { type: String },
      holes: { type: String },
      image: { type: String },
      topText: { type: String, attribute: 'top-text' },
      bottomText: { type: String, attribute: 'bottom-text' },
      fancy: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 300px;
        border: 2px solid var(--golf-card-border-color, #2e7d32);
        border-radius: 8px;
        padding: 16px;
        margin: 16px;
        background-color: var(--golf-card-bg, #ffffff);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .card-header {
        border-bottom: 2px solid var(--golf-card-border-color, #2e7d32);
        padding-bottom: 8px;
        margin-bottom: 12px;
      }

      h2 {
        margin: 0 0 8px 0;
        color: var(--golf-card-title-color, #1b5e20);
        font-size: 1.5em;
      }

      .meta {
        display: flex;
        gap: 16px;
        font-size: 0.9em;
        color: #666;
        margin-bottom: 12px;
      }

      .meta-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      meme-maker {
        width: 100%;
        --meme-maker-font-size: 10px;
      }

      details {
        margin-top: 12px;
      }

      summary {
        cursor: pointer;
        font-weight: bold;
        color: var(--golf-card-title-color, #1b5e20);
        padding: 8px;
        background-color: var(--golf-card-summary-bg, #f1f8e9);
        border-radius: 4px;
        user-select: none;
      }

      summary:hover {
        background-color: var(--golf-card-summary-hover, #dcedc8);
      }

      .description {
        padding: 12px 8px;
        line-height: 1.6;
      }

      ::slotted(p) {
        margin: 0 0 8px 0;
      }

      ::slotted(strong) {
        color: var(--golf-card-title-color, #1b5e20);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Golf Course';
    this.location = 'Unknown';
    this.holes = '18';
    this.image = '';
    this.topText = '';
    this.bottomText = '';
    this.fancy = false;
  }

  render() {
    return html`
      <div class="card-header">
        <h2>${this.title}</h2>
      </div>

      <div class="meta">
        <div class="meta-item">
          <span>📍</span>
          <span>${this.location}</span>
        </div>
        <div class="meta-item">
          <span>⛳</span>
          <span>${this.holes} holes</span>
        </div>
      </div>

      <meme-maker
        image-url="${this.image}"
        top-text="${this.topText}"
        bottom-text="${this.bottomText}"
      ></meme-maker>

      <details>
        <summary>Description</summary>
        <div class="description">
          <slot>
            <p>Click to add course description...</p>
          </slot>
        </div>
      </details>
    `;
  }
}

customElements.define('golf-course-card', GolfCourseCard);