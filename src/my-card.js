import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Harbour Town Golf Links";
    this.image = "https://www.seapines.com/sites/default/files/styles/hole_mobile/public/media/images/Hornstein_HT_hole18a.jpg?h=4c16fd0c&itok=09MrKA9m";
    this.description = "One of the most celebrated courses on the PGA TOUR, Harbour Town® is both the crowning achievement of famed designer Pete Dye and design consultant Jack Nicklaus. It places a premium on finesse, imagination, and shot making, rather than strength.";
    this.link = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        width: 300px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        margin: 25px;
        border: black 2px solid;
        display: inline-block;
      }
      .image img {
        width: 300px;
        height: 200px;
        border-radius: 8px;
      }
      .heading {
        text-align: center;
      }
      .paragraph {
        color: black;
        font-size: 16px;
        margin: 10px;
        text-align: left;
      }
      .button {
        display: none;
        background-color: blue;
        color: white;
        font-size: 18px;
        border: none;
        padding: 12px 10px;
        text-align: center;
        margin: 2px 10px 20px 30px;
        width: 80%;
        border-radius: 8px;
        cursor: pointer;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .button {
          display: block;
        }
      }
      @media (max-width: 500px) {
        .card {
          width: 250px;
        }
        .image img {
          width: 250px;
          height: 150px;
        }
        .paragraph {
          font-size: 14px;
        }
      }
      .button:focus,
      .button:hover {
        background-color: black;
      }
      .bg-change {
        background-color: pink;
        color: white;
      }
    `;
  }

  render() {
  return html`
    <div class="card">
      <div class="image">
        <img src="${this.image}" alt="${this.title}">
      </div>
      <h3 class="heading">${this.title}</h3>
      <p class="paragraph">${this.description}</p>
      <a href="${this.link}">
        <button class="button">Details</button>
      </a>
    </div>
  `;
}
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);