import '@shopify/ui-extensions/preact';
import {render} from "preact";
import { useState } from 'preact/hooks';

// 1. Export the extension
export default async () => {
  render(<Extension />, document.body)
};

const reviews = [
  {
    name: 'Dan Rokusek',
    rating: 5,
    date: '45 weeks ago',
    reviewCount: 61,
    text: 'Tremendous deck design support, great product and competitive pricing to high-end composite decking.',
  },
  {
    name: 'Isabel Pardo',
    rating: 5,
    date: '21 weeks ago',
    reviewCount: 1,
    text: 'A standout feature of Tanzite Stone Decks is slip resistance. Even in the rain, I can walk across my deck with confidence. It is a perfect choice for those looking for a safe outdoor space.',
  },
  {
    name: 'Jeff Williams',
    rating: 5,
    date: 'Jun 1, 2023',
    reviewCount: 27,
    text: 'We chose to replace our patio that was over 20 years old with Tanzite. An incredibly good product, well designed, and a lot of choices. Used primarily for resurfacing our old patio, it is also great for patios. They helped design the layout to our specifications and gave us a diagram to follow to lay it out. Each tile has built-in spacers and makes the entire process very easy once you get the ground prepared correctly.',
  },
  {
    name: 'Steven Stuphin',
    rating: 5,
    date: 'Jun 14, 2023',
    reviewCount: 2,
    text: "Ok so I don't normally take the time to leave reviews on products. I'm just very happy with this one. I build decks for a living and am glad one of my clients asked me to build with this Tanzite decking materials are great to work with. I have used other composite materials and I believe that this product is far superior to the store brand composites. Installation is just as easy you just have to use a wet saw with a smooth cut diamond blade to make your cuts. The sun doesn't affect this material near as much as there is zero movement from heat since the heat is not much of a factor. Also unlike other composites Tanzite doesn't even get slippery in the slightest when wet so it is great for pool decks. The company is very helpful with correcting anything that needs attention when or if issues arise. I will most definitely be building my next personal deck with Tanzite. Five star company all day long. I hope this helps anyone wondering if Tanzite is the right choice.",
  },
];

function ReviewCard({ review }) {
  return (
    <s-box
      border="base"
      borderRadius="base"
      padding="base"
    >
      <s-stack gap="small">
        <s-stack
          direction="inline"
          gap="small"
          align="center"
        >
          <s-text type="strong">
            ❝
          </s-text>

          <s-text type="strong">
            {'★'.repeat(review.rating)}
          </s-text>

          <s-text color="subdued" size="small">
            {review.date}
          </s-text>

          <s-text type="strong" size="small">
            {review.reviewCount}{' '}
            {review.reviewCount === 1 ? 'review' : 'reviews'}
          </s-text>
        </s-stack>

        <s-text color="subdued" size="small">
          {review.text}
        </s-text>

        <s-text type="strong" size="small">
          {review.name}
        </s-text>
      </s-stack>
    </s-box>
  );
}

function Extension() {
  const [showAll, setShowAll] = useState(true);

  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, 2);

  return (
    <s-section>
      <s-stack gap="base">
        {visibleReviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            review={review}
          />
        ))}

        {reviews.length > 2 && (
          <s-button
            variant="secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show fewer reviews' : 'Show all reviews'}
          </s-button>
        )}
      </s-stack>
    </s-section>
  );
}