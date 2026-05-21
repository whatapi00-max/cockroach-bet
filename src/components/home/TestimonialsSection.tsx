const testimonials = [
  {
    id: 1,
    avatar: '👨',
    name: 'Rahul M.',
    city: 'Mumbai',
    rating: 5,
    review: 'Withdrew ₹42,000 in 3 minutes. Never seen anything this fast.'
  },
  {
    id: 2,
    avatar: '👩',
    name: 'Priya K.',
    city: 'Delhi',
    rating: 5,
    review: 'Sweet Bonanza hit x4000 for me. Best day of my life.'
  },
  {
    id: 3,
    avatar: '👨',
    name: 'Arjun S.',
    city: 'Bangalore',
    rating: 5,
    review: 'Fake bookies froze my account. cockroach.bet never did.'
  },
  {
    id: 4,
    avatar: '👩',
    name: 'Sneha T.',
    city: 'Hyderabad',
    rating: 5,
    review: 'VIP manager is amazing. Personal bonus every week!'
  },
  {
    id: 5,
    avatar: '👨',
    name: 'Dev R.',
    city: 'Chennai',
    rating: 5,
    review: 'Aviator is insane here. Won $800 in one session.'
  },
  {
    id: 6,
    avatar: '👩',
    name: 'Anjali M.',
    city: 'Kolkata',
    rating: 5,
    review: 'Teen Patti feels real. Live dealers are the best.'
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">WHAT <span className="text-brand">COCKROACH.BET</span> PLAYERS SAY</h2>
      <p className="text-center text-text-muted mb-6">Real winners. Real withdrawals. Real <span className="text-brand font-bold">cockroach.bet</span>.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-bg-card border border-border-glow rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{testimonial.avatar}</div>
              <div>
                <div className="font-bold text-text-primary">{testimonial.name}</div>
                <div className="text-sm text-text-muted">{testimonial.city}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-neon-gold">⭐</span>
              ))}
            </div>
            <p className="text-text-muted italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>

      <div className="bg-bg-card border border-border-glow rounded-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <img src="/images/logo.png" alt="CockroachBet" className="h-16 w-auto object-contain" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-neon-gold text-2xl">⭐</span>
            ))}
          </div>
        </div>
        <div className="text-3xl font-bold text-neon-green mb-1">4.9 / 5</div>
        <div className="text-text-muted">based on 12,847 <span className="text-brand font-bold">cockroach.bet</span> player reviews on Trustpilot</div>
      </div>
    </div>
  );
}
