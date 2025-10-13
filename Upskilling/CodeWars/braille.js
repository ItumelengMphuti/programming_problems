function BrailleReader(braille) {

  if (!braille || braille.length !== 3) return '';

  const [top, mid, bot] = braille.map(s => s || '');
  const len = Math.min(top.length, mid.length, bot.length);

  // mapping bitstring (pos 1..6) => letter or space
  const MAP = {
    "100000":"a","110000":"b","100100":"c","100110":"d","100010":"e",
    "110100":"f","110110":"g","110010":"h","010100":"i","010110":"j",
    "101000":"k","111000":"l","101100":"m","101110":"n","101010":"o",
    "111100":"p","111110":"q","111010":"r","011100":"s","011110":"t",
    "101001":"u","111001":"v","010111":"w","101101":"x","101111":"y","101011":"z",
    "000000":" " // empty 6 cells => space
  };

  let result = '';
  // each letter is 2 columns wide
  for (let col = 0; col + 1 < len; col += 2) {
    const tl = top[col]   || ' ';
    const tr = top[col+1] || ' ';
    const ml = mid[col]   || ' ';
    const mr = mid[col+1] || ' ';
    const bl = bot[col]   || ' ';
    const br = bot[col+1] || ' ';

    // order: top-left(1), mid-left(2), bot-left(3), top-right(4), mid-right(5), bot-right(6)
    const bit = [
      tl === '0' ? '1' : '0',
      ml === '0' ? '1' : '0',
      bl === '0' ? '1' : '0',
      tr === '0' ? '1' : '0',
      mr === '0' ? '1' : '0',
      br === '0' ? '1' : '0'
    ].join('');

    result += (MAP[bit] !== undefined) ? MAP[bit] : '?';
  }

  return result;
}
