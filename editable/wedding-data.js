/**
 * wedding-data.js — Customer-facing editable data layer for rajmahal-palace
 * Edit this file to update couple names, parents, dates, venue, Sanskrit shloka, events, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sayantika",
    groom: "Anirban",
    brideFull: "Sayantika Pal",
    groomFull: "Anirban Dey",
    brideParents: "Daughter of Mrs. Rinku & Mr. Himangshu Pal",
    groomParents: "Son of Mrs. Shikha & Mr. Debaprosad Dey",
    hashtag: "#SayantikaWedsAnirban",
  },

  wedding: {
    dateISO: "2026-10-12T10:30:00+05:30",
    dateLabel: "Monday, 12th October 2026",
    timeLabel: "Begins at 10:30 AM",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, request the honour of your gracious presence to celebrate the Engagement of Sayantika & Anirban.",
  },

  venue: {
    name: "Ethereal Pool House Banquet",
    address: "H B Town, Sodepur, Kolkata, Khardaha, West Bengal 700110",
    mapsQuery: "Ethereal Pool House Banquet, H B Town, Sodepur, Kolkata, Khardaha, West Bengal 700110",
  },

  events: [
    {
      name: "Welcome & Gathering",
      icon: "sparkles",
      date: "Monday, 12th October 2026",
      time: "10:30 AM",
      venue: "Ethereal Pool House Banquet",
      note: "Welcoming our beloved guests as the engagement festivities commence.",
    },
    {
      name: "Ashirvad",
      icon: "flower",
      date: "Monday, 12th October 2026",
      time: "12:00 PM",
      venue: "Ethereal Pool House Banquet",
      note: "Seeking divine blessings and auspicious wishes from our elders.",
    },
    {
      name: "Lunch",
      icon: "sparkles",
      date: "Monday, 12th October 2026",
      time: "1:30 PM",
      venue: "Banquet Dining Hall",
      note: "A grand celebratory feast served with love and warmth.",
    },
    {
      name: "Engagement Event",
      icon: "heart",
      date: "Monday, 12th October 2026",
      time: "4:00 PM",
      venue: "Ethereal Pool House Banquet",
      note: "Exchange of rings celebrating our love and lifelong commitment.",
    },
    {
      name: "Registry Marriage",
      icon: "heart",
      date: "Monday, 12th October 2026",
      time: "5:30 PM",
      venue: "Ethereal Pool House Banquet",
      note: "Solemnizing our union legally before family, friends and witnesses.",
    },
    {
      name: "Party & Events",
      icon: "music",
      date: "Monday, 12th October 2026",
      time: "6:30 PM",
      venue: "Poolside Lawn & Banquet",
      note: "An evening of music, dance, laughter and unforgettable celebrations.",
    },
    {
      name: "Dinner",
      icon: "sparkles",
      date: "Monday, 12th October 2026",
      time: "8:00 PM onwards",
      venue: "Banquet Dining Hall",
      note: "A delectable culinary spread to conclude an auspicious day.",
    },
  ],

  images: {
    couple: "./editable/assets/couple.png",
    heroBg: "./editable/assets/hero-bg.png",
    ganesha: "./editable/assets/ganesha.png",
    diya: "./editable/assets/diya.png",
    mandala: "./editable/assets/mandala.png",
    footerGarland: "./editable/assets/footer-garland.png",
  },
};
