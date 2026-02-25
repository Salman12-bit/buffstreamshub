"use client";

import "./home.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const sports = [
    { name: "FOOTBALL", slug: "football", image: "/images/Football.webp" },
    { name: "BASKETBALL", slug: "basketball", image: "/images/Basketball.webp" },
    { name: "HOCKEY", slug: "hockey", image: "/images/Hockey.webp" },
    { name: "AMERICAN FOOTBALL", slug: "americanfootball", image: "/images/AmericanFootball.webp" },
    { name: "CRICKET", slug: "cricket", image: "/images/Cricket.webp" },
    { name: "BASEBALL", slug: "baseball", image: "/images/Baseball.webp" },
    { name: "MOTOR-SPORTS", slug: "motorsports", image: "/images/Motorsports.webp" },
    { name: "FIGHT", slug: "fight", image: "/images/Fight.webp" },
    { name: "TENNIS", slug: "tennis", image: "/images/Tennis.webp" },
    { name: "RUGBY", slug: "rugby", image: "/images/Rugby.webp" },
    { name: "GOLF", slug: "golfs", image: "/images/Golf.webp" },
    { name: "BILLIARDS", slug: "billiars", image: "/images/Billiards.webp" },
    { name: "AFL", slug: "afl", image: "/images/AFL.webp" },
    { name: "DARTS", slug: "dart", image: "/images/Darts.webp" },
    { name: "OTHERS", slug: "others", image: "/images/Others.webp" },
  ];

  const [viewCounts, setViewCounts] = useState({});

  useEffect(() => {
    const stored = sessionStorage.getItem("view_counts");
    if (stored) {
      setViewCounts(JSON.parse(stored));
    } else {
      const init = {};
      sports.forEach(s => (init[s.slug] = 0));
      setViewCounts(init);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(viewCounts).length > 0) {
      sessionStorage.setItem("view_counts", JSON.stringify(viewCounts));
    }
  }, [viewCounts]);

  const handleCardClick = (slug) => {
    const key = `watching_${slug}`;

    if (!sessionStorage.getItem(key)) {
      setViewCounts(prev => ({
        ...prev,
        [slug]: prev[slug] + 1,
      }));
      sessionStorage.setItem(key, "true");
    }

    router.push("/" + slug);
  };

  useEffect(() => {
    const handleUnload = () => {
      const stored = sessionStorage.getItem("view_counts");
      if (!stored) return;

      let counts = JSON.parse(stored);

      sports.forEach(sport => {
        const key = `watching_${sport.slug}`;
        if (sessionStorage.getItem(key)) {
          counts[sport.slug] = Math.max(counts[sport.slug] - 1, 0);
          sessionStorage.removeItem(key);
        }
      });

      sessionStorage.setItem("view_counts", JSON.stringify(counts));
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <div className="home">
      <section className="categories">
        <div className="category-grid">

          {sports.map(sport => (
            <div
              key={sport.slug}
              className="category-card"
              onClick={() => handleCardClick(sport.slug)}
              style={{ cursor: "pointer" }}
            >
              <span className="badge hover-badge">
                {viewCounts[sport.slug] ?? 0} 👁️
              </span>

              <img src={sport.image} alt={sport.name} />
              <p>{sport.name}</p>
            </div>
          ))}

        </div>
      </section>

      <section className="passionate">
        <p>
          Searching for a reliable place to stream live sports without constant buffering?
          <strong> BuffStreams</strong> is created for dedicated sports fans who don’t want
          to miss key moments. With a user-friendly layout and quick-loading streams,
          enjoying live matches online becomes easy and hassle-free.

          From global cricket events and leading football competitions
          to NFL matchups, NBA games, UFC fight nights, boxing cards, and more —
          BuffStreams brings worldwide sports coverage together in one platform.
          Watch in high definition and stay connected to the action wherever you are.

          Join BuffStreams today and take your live sports streaming experience to the next level.
        </p>
      </section>

      <section className="why-section">

        <h2 className="why-title">
          <span></span>
          WHY BUFFSTREAMS STANDS OUT
          <span></span>
        </h2>

        <div className="why-wrapper">

          <div className="why-item">
            <div className="why-number">1</div>
            <div className="why-box">
              <h3>All-in-One Sports Streaming Platform</h3>
              <p>
                Whatever sport you enjoy — <strong>cricket</strong>,
                <strong> football</strong>, <strong>basketball</strong>, or <strong>MMA</strong> —
                BuffStreams provides access to major leagues, tournaments,
                and championship events. Everything you need is organized
                in one convenient and easy-to-access place.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">2</div>
            <div className="why-box">
              <h3>Crystal Clear HD Streaming</h3>
              <p>
                Watch your favorite matches in sharp <strong>HD quality</strong>
                with stable and smooth playback. BuffStreams adapts to your
                internet connection to help minimize buffering and maintain
                a consistent viewing experience.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">3</div>
            <div className="why-box">
              <h3>Live Scores & Instant Updates</h3>
              <p>
                Keep up with match schedules, live scores, and key highlights
                as the action unfolds. BuffStreams ensures you stay informed
                about every goal, touchdown, wicket, and knockout in real time.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="offer-section">

        <h2 className="offer-title">
          <span></span>
          SPORTS YOU CAN WATCH
          <span></span>
        </h2>

        <div className="offer-grid">

          <div className="offer-card">
            <strong>Cricket:</strong> Stream leading tournaments such as
            <em> IPL</em>, <em>PSL</em>, <em>BPL</em>, ICC competitions,
            and international test and ODI series.
          </div>

          <div className="offer-card">
            <strong>Football:</strong> Follow live coverage from
            <em> Premier League</em>, <em>La Liga</em>, <em>Champions League</em>,
            and other major global tournaments.
          </div>

          <div className="offer-card">
            <strong>NFL & Basketball:</strong> Watch
            <em> NFL</em> matchups and exciting <em>NBA</em> games
            throughout the season.
          </div>

          <div className="offer-card">
            <strong>MMA & Boxing:</strong> Stay tuned to
            <em> UFC</em> fight nights and major international boxing events.
          </div>

          <div className="offer-card">
            <strong>Tennis & Ice Hockey:</strong> Enjoy live action from
            <em> Grand Slam</em> championships and professional <em>NHL</em> fixtures.
          </div>

          <div className="offer-card">
            <strong>Motorsports:</strong> Experience the thrill of
            <em> Formula 1</em>, <em>NASCAR</em>, and <em>MotoGP</em> racing.
          </div>

          <div className="offer-card">
            <strong>eSports:</strong> Watch competitive gaming from titles like
            <em> CS:GO</em>, <em>Valorant</em>, and <em>League of Legends</em>.
          </div>

          <div className="offer-card">
            <strong>Golf:</strong> Follow professional events from the
            <em> PGA Tour</em> and international championships worldwide.
          </div>

        </div>

      </section>

      <section className="commit-section">
        <div className="commit-box">
          <h2>Our Commitment to Sports Viewers</h2>
          <p>
            <strong>BuffStreams</strong> is designed for fans who are passionate about sports.
            Whether it’s a high-stakes football rivalry, an intense UFC showdown,
            or a dramatic final-second basketball play, we deliver the excitement directly to your screen.
          </p>
          <p>
            Our focus remains on speed, reliability, and a smooth streaming experience.
            With quick match access and dependable performance, BuffStreams
            helps you enjoy the game without unnecessary interruptions.
          </p>
          <p className="commit-highlight">
            🚀 The games continue — and BuffStreams keeps you connected.
          </p>
          <Link href="football" className="commit-btn">Watch Live Sports Now</Link>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-box">
          <h2>Begin Streaming with BuffStreams</h2>
          <p>
            Sports fans rely on BuffStreams every day for consistent
            and accessible live streaming. Whether you support a single team
            or follow multiple sports, BuffStreams makes watching live games simple and convenient.
          </p>
        </div>
      </section>

    </div>
  );
}