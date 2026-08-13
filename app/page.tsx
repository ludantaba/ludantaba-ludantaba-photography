"use client";

import { useState } from "react";

const works = [
  {
    src: "./photos/02-coastline.jpg",
    alt: "海浪拍打礁石的黑白照片",
    index: "01",
    title: "海岸线",
    meta: "摄于 2025 · 海风与潮声",
  },
  {
    src: "./photos/03-forest-light.jpg",
    alt: "阳光穿过树林的黑白照片",
    index: "02",
    title: "森林之光",
    meta: "摄于 2025 · 晨间斜阳",
  },
  {
    src: "./photos/04-alpine-lake.jpg",
    alt: "雪山倒映湖面的黑白照片",
    index: "03",
    title: "高山湖泊",
    meta: "摄于 2024 · 雪山倒影",
  },
  {
    src: "./photos/05-desert-dusk.jpg",
    alt: "黄昏戈壁的黑白照片",
    index: "04",
    title: "戈壁黄昏",
    meta: "摄于 2024 · 风蚀与余晖",
  },
  {
    src: "./photos/06-city-night.jpg",
    alt: "夜晚城市灯火的黑白照片",
    index: "05",
    title: "城市夜行",
    meta: "摄于 2023 · 灯火长街",
  },
  {
    src: "./photos/07-aurora.jpg",
    alt: "夜空中极光的黑白照片",
    index: "06",
    title: "极光之下",
    meta: "摄于 2023 · 北纬 66°",
  },
];

function EnvelopeScene() {
  const [run, setRun] = useState(0);

  return (
    <div className="envelope-stage">
      <div className="envelope-wrap" key={run}>
        <svg
          className="envelope-svg"
          viewBox="0 0 520 420"
          role="img"
          aria-label="一枚信封缓缓打开，露出一张 2026 年新年贺卡"
        >
          <g className="env-back">
            <rect x="60" y="80" width="400" height="260" rx="6" fill="#d7d6d1" />
            <path d="M60 80 L260 340 L460 80 Z" fill="#c9c8c2" />
            <ellipse cx="260" cy="356" rx="185" ry="14" fill="#000" opacity="0.09" />
          </g>

          <g className="env-flap">
            <path
              d="M60 80 L260 330 L460 80 Z"
              fill="#e3e2dc"
              stroke="#b9b8b1"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M60 80 L260 330" stroke="#cfcec7" strokeWidth="1.2" fill="none" />
            <circle cx="260" cy="212" r="15" fill="#b08d57" />
            <text
              x="260"
              y="218"
              textAnchor="middle"
              fontSize="14"
              fontFamily="Georgia, serif"
              fill="#f4f3ef"
            >
              L
            </text>
          </g>

          <g className="env-card">
            <rect
              x="85"
              y="112"
              width="350"
              height="216"
              rx="6"
              fill="#fbfaf7"
              stroke="#141414"
              strokeWidth="1.4"
            />
            <g className="card-text">
              <text
                x="260"
                y="138"
                textAnchor="middle"
                fontSize="10"
                letterSpacing="4"
                fill="#9c9c97"
                fontFamily="Arial, sans-serif"
              >
                丙午 · 新春
              </text>
              <text
                x="260"
                y="179"
                textAnchor="middle"
                fontSize="58"
                letterSpacing="3"
                fill="#141414"
                fontFamily="Georgia, 'Songti SC', serif"
              >
                2026
              </text>
              <line x1="196" y1="193" x2="324" y2="193" stroke="#141414" strokeWidth="1" />
              <text
                x="260"
                y="227"
                textAnchor="middle"
                fontSize="26"
                letterSpacing="8"
                fill="#141414"
                fontFamily="Georgia, 'Songti SC', serif"
              >
                新年快乐
              </text>
              <text
                x="260"
                y="253"
                textAnchor="middle"
                fontSize="10"
                letterSpacing="4"
                fill="#6f6f6b"
                fontFamily="Arial, sans-serif"
              >
                HAPPY NEW YEAR · 2026
              </text>
              <circle cx="260" cy="286" r="16" fill="none" stroke="#b08d57" strokeWidth="1.4" />
              <text
                x="260"
                y="294"
                textAnchor="middle"
                fontSize="16"
                fill="#b08d57"
                fontFamily="Georgia, 'Songti SC', serif"
              >
                马
              </text>
            </g>
          </g>

          <g className="env-front">
            <rect x="60" y="80" width="400" height="260" rx="6" fill="#eceae5" />
            <path d="M60 80 L260 340 L460 80 Z" fill="#f2f1ec" />
            <path d="M60 80 L260 340" stroke="#b9b8b1" strokeWidth="1.5" fill="none" />
            <path d="M460 80 L260 340" stroke="#b9b8b1" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      </div>
      <p className="caption">新年贺卡 · 2026 · 缓缓开启</p>
      <button className="replay-btn" type="button" onClick={() => setRun((r) => r + 1)}>
        再开一次
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="masthead">
        <div className="container masthead-inner">
          <div className="brand">
            LUDANTABA <span className="brand-sub">摄影作品集</span>
          </div>
          <nav className="nav" aria-label="站内导航">
            <a href="#works">作品</a>
            <a href="#feature">专题</a>
            <a href="#about">关于</a>
            <a href="#footer">联系</a>
          </nav>
          <div className="issue">VOL.01 — 2026</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="kicker">LUDANTABA · 摄影作品集</p>
              <h1 className="hero-title">风景的叙事</h1>
              <p className="hero-sub">
                山川、海岸、森林与城市——用镜头收藏旅途中的光与风。本刊收录 2019
                至 2026 年的部分风景作品。
              </p>
              <div className="hero-meta">
                <span>
                  PHOTOGRAPHER / <b>LUDANTABA</b>
                </span>
                <span>
                  ISSUE / <b>01</b>
                </span>
                <span>
                  YEAR / <b>2019—2026</b>
                </span>
              </div>
            </div>
            <EnvelopeScene />
          </div>
        </section>

        <section className="feature" id="feature">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">本期专题 · FEATURED STORY</p>
              <span className="section-num">№ 00</span>
            </div>
            <div className="feature-grid">
              <div className="feature-copy">
                <h2>晨雾山谷</h2>
                <p className="lead">
                  清晨五点的川西高原，雾气沿着山谷缓慢流动。等待两小时后，第一束光终于翻过山脊。
                </p>
                <blockquote>摄影是等待的艺术——光会来，风会停。</blockquote>
                <div className="figure-meta">
                  <span>2025 · 川西高原</span>
                  <span>01/07</span>
                </div>
              </div>
              <figure className="photo feature-photo">
                <img src="./photos/01-mist-valley.jpg" alt="雾气弥漫山谷的黑白照片" />
              </figure>
            </div>
          </div>
        </section>

        <section className="works" id="works">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">作品选集 · SELECTED WORKS</p>
              <span className="section-num">06 组</span>
            </div>
            <div className="works-grid">
              {works.map((w) => (
                <article className="work-card" key={w.index}>
                  <div className="work-num">№ {w.index}</div>
                  <figure className="photo work-photo">
                    <img src={w.src} alt={w.alt} loading="lazy" />
                  </figure>
                  <div className="work-info">
                    <h3>{w.title}</h3>
                    <span>{w.meta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-grid">
            <div>
              <p className="about-kicker">关于 · ABOUT</p>
              <h2>行走于山野与城市之间</h2>
              <p>
                LUDANTABA 以风景为线索，记录旅途中的光、雾与风。镜头偏爱清晨与黄昏，也偏爱无人打扰的角落。
                这里收录近年来的部分风景作品，愿每一帧都值得停留。
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <b>07</b>
                <span>收录组作</span>
              </div>
              <div className="stat">
                <b>2019</b>
                <span>起步年份</span>
              </div>
              <div className="stat">
                <b>∞</b>
                <span>未完的旅程</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container" id="footer">
        <span>© 2026 LUDANTABA</span>
        <span>山川湖海 · 皆在镜头中</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </>
  );
}
