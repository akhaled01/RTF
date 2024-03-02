import noheart from "../assets/noheart.svg";
import heart from "../assets/heart.svg";
import comment from "../assets/comment.svg";

interface PostProps {
  nickname: string;
  creationDate: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

class FPost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["nickname", "creationdate", "content", "likecount", "commentcount"];
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  private render() {
    const { nickname, creationDate, content, likeCount, commentCount } =
      this.getProps();

    this.shadowRoot!.innerHTML = `
<style>
  :host {
    background-color: #1b1818;
    width: 50vw;
    min-height: 15vw;
    max-height: -moz-fit-content;
    max-height: fit-content;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .p-header {
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 1em;
  }

  .p-profileInfo {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .p-profile-pic {
    width: 3em;
    height: 3em;
    background-color: aliceblue;
    border-radius: 1000px;
  }

  .p-main {
    margin-top: 1em;
    margin-bottom: 1em;
    width: 90%;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: justify;
  }

  .p-stats {
    margin-top: 1.5em;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 40%;
  }

  .p-likeCount {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .p-commentCount {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .p-commentCount>img {
    transition: ease-out 0.3s;
  }

  .p-commentCount>img:hover {
    transform: translateY(-5px);
  }

  .p-likeBtn {
    cursor: pointer;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.9s;
  }

  .p-likeBtn:hover {
    transform: translateY(-5px);
  }
</style>
<div class="p-header">
  <div class="p-profileInfo">
    <div class="p-profile-pic"></div>
    <div class="p-nickname">${nickname}</div>
  </div>
  <div class="p-creationDate">${creationDate}</div>
</div>
<div class="p-main">
  <div class="p-content">${content}</div>
  <div class="p-stats">
    <div class="p-likeCount">
      <div class="p-likeBtn">
        <img src="${noheart}" alt="like" />
      </div>
      <div class="p-likeStat">${likeCount}</div>
    </div>
    <div class="p-commentCount">
      <img src="${comment}" alt="comment" />
      <div class="p-comment-Stat">${commentCount}</div>
    </div>
  </div>
</div>
    `;
  }

  private getProps(): PostProps {
    return {
      nickname: this.getAttribute("nickname") || "",
      creationDate: this.getAttribute("creationdate") || "",
      content: this.getAttribute("content") || "",
      likeCount: parseInt(this.getAttribute("likecount") || "0", 10),
      commentCount: parseInt(this.getAttribute("commentcount") || "0", 10),
    };
  }

  private addEventListeners() {
    const likeBtn = this.shadowRoot!.querySelector(".p-likeBtn img");
    if (likeBtn) {
      likeBtn.addEventListener("click", () => {
        const currentSrc = likeBtn.getAttribute("src");
        if (currentSrc === noheart) {
          likeBtn.setAttribute("src", heart);
          console.log("liked");
        } else {
          likeBtn.setAttribute("src", noheart);
          console.log("unliked");
        }
      });
    }
  }
}

customElements.define("f-post", FPost);
