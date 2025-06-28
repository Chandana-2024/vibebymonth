// A helper function to generate a lighter shade of a hex color
function lightenColor(hex, percent) {
  // Remove hash if present
  hex = hex.replace(/^#/, '');

  // Convert to integer values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calculate lighter color
  r = Math.min(255, Math.floor(r + (255 - r) * percent));
  g = Math.min(255, Math.floor(g + (255 - g) * percent));
  b = Math.min(255, Math.floor(b + (255 - b) * percent));

  // Convert back to hex and return
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}












const monthColors = {
  January: '#a12a60',    // deep rose
  February: '#9b59b6',   // purple
  March: '#27ae60',      // green
  April: '#f39c12',      // orange
  May: '#2ecc71',        // emerald green
  June: '#e74c3c',       // red
  July: '#f1c40f',       // yellow
  August: '#d35400',     // dark orange
  September: '#2980b9',  // blue
  October: '#e67e22',    // pumpkin orange
  November: '#8e44ad',   // violet
  December: '#16a085'    // teal
};



const monthContent = {
  January: `🌟 January
Flower: Carnation – symbolizes love and admiration.
Stone: Garnet – symbolizes protection and loyalty.
Zodiac Signs: Capricorn (disciplined) & Aquarius (innovative).
Personality Traits: Ambitious, practical, private.
Relationships: Loyal but slow to trust; deeply committed.
Fun Facts: Often future leaders; many become doctors or CEOs.`,

  February: `🌸 February
Flower: Violet – symbolizes modesty and faithfulness.
Stone: Amethyst – symbolizes peace and clarity.
Zodiac Signs: Aquarius (visionary) & Pisces (empathetic).
Personality Traits: Creative, intelligent, compassionate.
Relationships: Emotionally deep; seek meaningful bonds.
Fun Facts: Shortest month; many born artists or dreamers.`,

  March: `🌼 March
Flower: Daffodil – symbolizes rebirth and new beginnings.
Stone: Aquamarine – symbolizes serenity and courage.
Zodiac Signs: Pisces (intuitive) & Aries (bold).
Personality Traits: Gentle, optimistic, imaginative.
Relationships: Emotionally supportive; romantic dreamers.
Fun Facts: Often musically inclined; love helping others.`,

  April: `🌷 April
Flower: Daisy – symbolizes innocence and purity.
Stone: Diamond – symbolizes strength and eternal love.
Zodiac Signs: Aries (confident) & Taurus (dependable).
Personality Traits: Energetic, brave, honest.
Relationships: Passionate lovers; value loyalty.
Fun Facts: Natural leaders; love challenges and growth.`,

  May: `🌸 May
Flower: Lily of the Valley – symbolizes sweetness and humility.
Stone: Emerald – symbolizes love and wisdom.
Zodiac Signs: Taurus (stable) & Gemini (adaptable).
Personality Traits: Loyal, practical, curious.
Relationships: Loyal partners; love deep conversation.
Fun Facts: Strong moral compass; great problem-solvers.`,

  June: `🌹 June
Flower: Rose – symbolizes love and beauty.
Stone: Pearl – symbolizes purity and wisdom.
Zodiac Signs: Gemini (social) & Cancer (nurturing).
Personality Traits: Caring, sensitive, expressive.
Relationships: Emotionally deep; very affectionate.
Fun Facts: Often creative writers or communicators.`,

  July: `🌻 July
Flower: Larkspur – symbolizes positivity and dignity.
Stone: Ruby – symbolizes passion and vitality.
Zodiac Signs: Cancer (emotional) & Leo (bold).
Personality Traits: Loyal, protective, warm-hearted.
Relationships: Strong family bonds; love deeply.
Fun Facts: Natural caregivers; many become teachers or leaders.`,

  August: `🌼 August
Flower: Gladiolus – symbolizes strength and honor.
Stone: Peridot – symbolizes healing and happiness.
Zodiac Signs: Leo (charismatic) & Virgo (analytical).
Personality Traits: Confident, generous, organized.
Relationships: Honest lovers; prefer stable commitment.
Fun Facts: Born problem-solvers; often athletic or high achievers.`,

  September: `🌸 September
Flower: Aster – symbolizes wisdom and faith.
Stone: Sapphire – symbolizes truth and loyalty.
Zodiac Signs: Virgo (thoughtful) & Libra (charming).
Personality Traits: Detail-oriented, calm, balanced.
Relationships: Faithful and thoughtful; value harmony.
Fun Facts: Great mediators; often in arts or science.`,

  October: `🌼 October
Flower: Marigold – symbolizes passion and creativity.
Stone: Opal – symbolizes hope and love.
Zodiac Signs: Libra (graceful) & Scorpio (intense).
Personality Traits: Bold, creative, determined.
Relationships: Passionate lovers; loyal and deep.
Fun Facts: Natural charmers; many are trendsetters.`,

  November: `🌸 November
Flower: Chrysanthemum – symbolizes loyalty and joy.
Stone: Topaz – symbolizes strength and healing.
Zodiac Signs: Scorpio (mysterious) & Sagittarius (adventurous).
Personality Traits: Brave, honest, curious.
Relationships: Intense but loyal; seek truth in love.
Fun Facts: Often philosophers or travelers.`,

  December: `🌲 December
Flower: Narcissus – symbolizes hope and faithfulness.
Stone: Turquoise – symbolizes wisdom and luck.
Zodiac Signs: Sagittarius (free-spirited) & Capricorn (disciplined).
Personality Traits: Optimistic, wise, ambitious.
Relationships: Honest partners; love deep conversations.
Fun Facts: Often inspirational; enjoy leadership and learning.`
};

function showVibe() {
  const month = document.getElementById('month').value;
  const output = document.getElementById('output');

  if (!month) {
    output.style.display = 'none';
    alert('Please select a month.');
    return;
  }

  output.textContent = monthContent[month];
  output.style.display = 'block';

  // Set border color
  const borderColor = monthColors[month] || '#a12a60';
  output.style.borderColor = borderColor;

  // Set background color as light shade (70% lighter)
  output.style.backgroundColor = lightenColor(borderColor, 0.7);
}
