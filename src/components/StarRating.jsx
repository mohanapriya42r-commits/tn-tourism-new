import React from 'react';

export function StarRating({ rating }) {
  const fullStars = Math.floor(rating || 0);
  const hasHalf = (rating || 0) % 1 >= 0.5;
  let starsStr = '';

  for (let i = 0; i < fullStars; i++) starsStr += '★';
  if (hasHalf) starsStr += '½';
  const emptyCount = 5 - Math.ceil(rating || 0);
  for (let i = 0; i < emptyCount; i++) starsStr += '☆';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
      <span style={{ color: '#fbbf24' }}>{starsStr}</span>
      <span style={{ fontWeight: '700', marginLeft: '0.2rem' }}>{rating}</span>
    </span>
  );
}

export default StarRating;
