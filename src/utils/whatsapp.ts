export const WA_NUMBER = "919876543210";

export const wa = (msg: string) => {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
};

export const WA_MESSAGES = {
  deposit: "Hi! I want to DEPOSIT on cockroach.bet",
  withdraw: "Hi! I want to WITHDRAW from cockroach.bet",
  signup: "Hi! I want to CREATE AN ACCOUNT on cockroach.bet",
  bonus: "Hi! I want to CLAIM MY WELCOME BONUS on cockroach.bet",
  vip: "Hi! I want to JOIN VIP on cockroach.bet",
  support: "Hi! I need SUPPORT on cockroach.bet",
  playGame: (game: string) =>
    `Hi! I want to play ${game} on cockroach.bet`,
  betMatch: (team: string, odds: string) =>
    `Hi! I want to bet on ${team} at odds ${odds} on cockroach.bet`,
  promoCode: (code: string) =>
    `Hi! I want to apply promo code: ${code} on cockroach.bet`,
  tournament: (name: string) =>
    `Hi! I want to JOIN the ${name} tournament on cockroach.bet`,
  appDownload: "Hi! Please send me the cockroach.bet app download link",
};
