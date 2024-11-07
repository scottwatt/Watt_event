import React from 'react';
import './PokerRules.css';


const PokerRules = () => {
  return (
    <div className="rules-page">
      <header className="rules-header">
        <h1>Poker Rules</h1>
      </header>
      <section className="rules-content">
        <h2>The Pack</h2>
        <p>
        The standard 52-card pack, sometimes with the addition of one or two jokers, is used. Poker is a one-pack game, but today, in virtually all games played in clubs and among the best players, two packs of contrasting colors are utilized in order to speed up the game. While one pack is being dealt, the other is being shuffled and prepared for the next deal. The procedure for two packs is as follows: While the deal is in progress, the previous dealer assembles all the cards from the pack he dealt, shuffles them, and places them to the left. When it is time for the next deal, the shuffled deck is passed to the next dealer. In many games in which two packs are used, the dealer's left-hand opponent, instead of the right-hand opponent, cuts the pack.
    
        In clubs, it is customary to change cards often and to permit any player to call for new cards whenever they wish. When new cards are introduced, both packs are replaced, and the seal and cellophane wrapping on the new decks should be broken in full view of all the players.
          
        </p>
        <br></br>
      </section>
      <section className="rules-section">
      <h2>Card Values/Scoring</h2>
        <p>
          While Poker is played in innumerable forms, a player who understands the values of the Poker hands and the principles of betting can play without difficulty in any type of Poker game. Except in a few versions of the game, a Poker hand consists of five cards. The various combinations of Poker hands rank from five of a kind (the highest) to no pair or nothing (the lowest):
        </p>
        <ol className="hand-ranking">
        <li>
    <strong>Five of a Kind</strong> – This is the highest possible hand and can occur only in games where at least one card is wild, such as a joker, the two one-eyed jacks, or the four deuces. Examples of five of a kind would be four 10s and a wild card or two queens and three wild cards.
  </li>
  <li>
    <strong>Straight Flush</strong> – This is the highest possible hand when only the standard pack is used, and there are no wild cards. A straight flush consists of five cards of the same suit in sequence, such as 10, 9, 8, 7, 6 of hearts. The highest-ranking straight flush is the A, K, Q, J, and 10 of one suit, and this combination has a special name: a royal flush or a royal straight flush. The odds on being dealt this hand are 1 in almost 650,000.
  </li>
  <li>
    <strong>Four of a Kind</strong> – This is the next highest hand, and it ranks just below a straight flush. An example is four aces or four 3s. It does not matter what the fifth, unmatched card is.
  </li>
  <li>
    <strong>Full House</strong> – This colorful hand is made up of three cards of one rank and two cards of another rank, such as three 8s and two 4s, or three aces and two 6s.
  </li>
  <li>
    <strong>Flush</strong> – Five cards, all of the same suit, but not all in sequence, is a flush. An example is Q, 10, 7, 6, and 2 of clubs.
  </li>
  <li>
    <strong>Straight</strong> – Five cards in sequence, but not all of the same suit is a straight. An example is 9♥, 8♣, 7♠, 6♦, 5♥.
  </li>
  <li>
    <strong>Three of a Kind</strong> – This combination contains three cards of the same rank, and the other two cards each of a different rank, such as three jacks, a seven, and a four.
  </li>
  <li>
    <strong>Two Pairs</strong> – This hand contains a pair of one rank and another pair of a different rank, plus any fifth card of a different rank, such as Q, Q, 7, 7, 4.
  </li>
  <li>
    <strong>One Pair</strong> – This frequent combination contains just one pair with the other three cards being of different rank. An example is 10, 10, K, 4, 3.
  </li>
  <li>
    <strong>No Pair</strong> – This very common hand contains "nothing." None of the five cards pair up, nor are all five cards of the same suit or consecutive in rank. When more than one player has no pair, the hands are rated by the highest card each hand contains, so that an ace-high hand beats a king-high hand, and so on.
  </li>
        </ol>
      </section>
      <section className="rules-section">
        <h2>Betting</h2>
        <p>
        Betting is the key to Poker, for the game, in essence, is a game of chip management.

        In the course of each Poker deal, there will be one or more betting intervals in which the players have an opportunity to bet on their hands. Minimizing losses with poor hands and maximizing winnings with good hands is the underlying skill that Poker requires.

        Before the cards are even dealt, the rules of the Poker game being played may require that each player put an initial contribution, called an "ante," of one or more chips into the pot, to start it off.

        Each betting interval, or round, begins when a player, in turn, makes a bet of one or more chips. Each player to the left, in turn, must either "call" that bet by putting into the pot the same number of chips; or "raise," which means that the player puts in more than enough chips to call; or "drop" ("fold"), which means that the player puts no chips in the pot, discards their hand, and is out of the betting until the next deal.

        When a player drops, they lose any chips that have put into that pot. Unless a player is willing to put into the pot at least as many chips as any preceding player, they must drop out.

        A betting interval ends when the bets have been equalized - that is, when each player has either put in exactly as many chips as their predecessors or has dropped. There are usually two or more betting intervals for each Poker deal. After the final interval there is a "showdown," which means that each player who remains shows their hand face up on the table. The best Poker hand then takes the pot.

        If a player makes a bet or a raise that no other player calls, they win the pot without showing their hand. Thus, in Poker, there is a bluffing element, and the best combination of cards does not always win the pot! Bluffing is one of the key reasons why Poker is so popular.

        If a player wishes to remain in the game without betting, they "check." This means, in effect, that the player is making a "bet of nothing." A player may check provided no one before them in that betting interval has made a bet. If another player has bet, they cannot check but must at least call the bet or drop. A player who checks may raise a bet that has been raised by another player. This is called "sandbagging," which is allowed, unless it has been decided beforehand that this practice is forbidden. If all players check during a round of play, the betting interval is over, and all the players still in the pot remain in the game.

        In each betting round, one player is designated as the first bettor, according to the rules of the game. The turn to bet always moves to the left, from player to player, and no one may check, bet, or even drop, except when it is their turn.        
        </p>
        <br></br>
        <h3>Knowing When to Bet</h3>
        <p>
        The ranking of Poker hands is based on mathematics. The less likely a player is to get a certain hand, the higher it ranks and the more likely it is to win the pot. For example, a player should not expect to be dealt a straight flush more than once in 65,000 hands, but they can expect to be dealt two pair about once in every 21 hands.

        Unless a player is planning to bluff, they should not make a bet without holding a hand that they think may be the best. No Poker player can bet intelligently unless they know what constitutes a good hand, a fair hand, and a bad hand. A table of the various Poker hands and the number of combinations of each in a pack of cards is provided.
        </p>
      </section>
      <section className="rules-section">
        <h2>The Kitty</h2>
        <p>
        By unanimous or majority agreement, the players may establish a special fund called a "kitty." Usually the kitty is built up by "cutting" (taking) one low-denomination chip from each pot in which there is more than one raise. The kitty belongs to all the players equally, and it is used to pay for new decks of cards or for food and drinks. Any chips left in the kitty when the game ends are divided equally among the players who are still in the game. Unlike the rule in some other games, such as Pinochle, when a player leaves a Poker game before it ends, they are not entitled to take their share of chips that comprised part of the kitty.        </p>
      </section>
      <section className="rules-section">
        <h2>Chips</h2>
        <p>
        Poker is almost always played with poker chips. For a game with seven or more players, there should be a supply of at least 200 chips. Usually, the white chip (or the lightest-colored chip) is the unit, or lowest-valued chip, worth whatever the minimum ante or bet is; a red chip (or some other colored chip) is worth five whites, and a blue chip (or some other dark-colored chip) is worth 10 or 20 or 25 whites or two, four or five reds. At the start of the game, each player "buys in" by purchasing a certain number of chips. All of the players usually buy in for the same amount.        </p>
      </section>
      <section className="rules-section">
        <h2>Banker</h2>
        <p>
        One player should be designated as the banker, who keeps the stock of chips and records how many have been issued to each player or how much cash the player has paid for their chips. Players should make no private transactions or exchanges among themselves; a player with surplus chips may return them to the banker and receive credit or cash for them, while a player who wants more chips should obtain them only from the banker.        </p>
      </section>
      <section className="rules-section">
        <h2>Betting Limit</h2>
        <p>
        There are different ways of fixing a betting limit. Some limit is necessary; otherwise a player with a lot more money would have, or would be perceived to have, an unfair advantage. Once fixed, the limit should be unalterable throughout the game unless the players unanimously agree to change the stakes. Some popular limit systems follow:        </p>
      </section>
      <section className="rules-section">
        <h2>Fixed Limit</h2>
        <p>
        No one may bet or raise by more than a stipulated number of chips, for example, two, or five, or 10. Usually this limit varies with the stage of the game: In Draw Poker, if the limit is five before the draw, it might be ten after the draw. In Stud Poker, if the limit is five in the first four betting intervals, it is 10 in the final betting interval (and often ten whenever a player has a pair or better showing).
        </p>
      </section>
      <section className="rules-section">
        <h2>Pot Limit</h2>
        <p>
        Any bet or raise is limited to the number of chips in the pot at that time. This means that a player who raises may count as part of the pot the number of chips required for the player to call. If there are six chips in the pot, and a bet of four is made, the total is 10 chips; it requires four chips for the next player to call, making 14; and the player may then raise by 14 chips. But even when the pot limit is played, there should be some maximum limit, such as 50 chips.
        </p>
      </section>
      <section className="rules-section">
        <h2>Table Stakes</h2>
        <p>
        The limit for each player is the number of chips the player has in front of them. If the player has only 10 chips, they may bet no more than 10 and he may call any other player's bet to that extent. In table stakes, no player may withdraw chips from the table, or return chips to the banker, until they leave the game. A player may add to their stack, but only between the deal just completed and the beginning of the next deal.
        </p>
      </section>
      <section className="rules-section">
        <h2>Whangdoodles or Roodles</h2>
        <p>
        In a fixed-limit game, it is often agreed that following any very good hand - a full house or better, for example - there will be one deal by each player of Jackpots, in which everyone antes double, and the betting limit is doubled for these deals as well.
        </p>
      </section>
      <section className="rules-section">
        <h2>Poverty Poker</h2>
        <p>
        A maximum limit is put on the number of chips any player may lose. Each takes out one stack at the start; if they lose that stack, the banker issues the player another, without charging for it, and in many cases, the player can get still a third stack free before dropping out of the game. (Some limit should be placed on the number of free stacks so that a player will have the incentive to play carefully.)
        </p>
      </section>
      <section className="rules-section">
        <h2>No Limit</h2>
        <p>
        In these sessions, the "sky's the limit," but such games are rarely played today.
        </p>
      </section>
      <section className="rules-section">
        <h2>Limits on Raises</h2>
        <p>
        In almost all games played today, there is a limit on the number of raises at each betting interval, and this limit is invariably three raises.
        </p>
      </section>
      <section className="rules-section">
        <h2>Draw & Stud Poker</h2>
        <p>
        The players should first decide what form of Poker they will play

        The main forms of Poker are Draw Poker and Stud Poker. In Draw Poker, all the cards are dealt face down to the players. In Stud Poker, some of the cards are dealt face up as the betting progresses, so that all of the other players get to see a part of each player's hands.

        Unless the host, or the rule of a club, has already established the game, the players should first decide what form of Poker they will play. Two factors should influence their decision: the number of players, and whether the group has only experienced players or has some inexperienced players. The following selections are recommended:

        2, 3 or 4 players: Stud Poker in any form. Usually, with so few players, only the very experienced play Draw Poker and they will often use a stripped deck, which is a pack with cards removed, such as all the deuces (twos) and treys (threes).

        5—8 players: Any form of Poker, either Draw or Stud.

        9 or 10 players: Five-card Stud Poker

        More than 10 players: One of the games in which fewer than five cards are dealt, such as Three-Card Monte or Spit-in-the-Ocean. All of the Poker variations are described later in this chapter. Another alternative with so many players is to simply form two tables and organize two separate games.       
        </p>
      </section>
      <section className="rules-section">
        <h2>Dealer's Choice</h2>
        <p>
        When the Poker session is Dealer's Choice, each dealer has the privilege of naming the form of Poker to be played and to designate the ante, wild cards (if any), and the maximum limit of chips that can be wagered during each round. However, the dealer may not require one player to ante more than another. If a game such as Jackpots is selected and no one opens the betting, the same dealer deals again and everyone antes again.
        </p>
      </section>
      <section className="rules-section">
        <h2>Wild Cards</h2>
        <p>
        While most Poker purists choose to play with no wild cards, in many games, especially Dealer's Choice, various cards may be designated as wild. A wild card is specified by the holder to be a card of any rank or suit, such as a fifth queen, or the card needed to combine with the other four in a player's hand to form a straight or a flush. Wild cards in a Poker game add variety, and of course, they greatly increase the chances of getting a rare combination such as a full house or a straight flush. The usual choices for wild cards are as follows:
        </p>
      </section>
      <section className="rules-section">
        <h2>The Joker</h2>
        <p>
        Note that most packs of cards include two jokers for use in such games as Canasta. Poker players are increasingly adding one or both jokers as wild cards.
        </p>
      </section>
      <section className="rules-section">
        <h2>The Bug</h2>
        <p>
        This is the joker, but its wildness is limited: It counts as an ace; or as a card of any suit for making a flush; or as a card of any rank and suit for making a straight or straight flush.
        </p>
      </section>
      <section className="rules-section">
        <h2>Deuces</h2>
        <p>
        "Deuces Wild" is a popular form of Draw Poker. Every two is wild. Sometimes the joker is included as a fifth wild card. Note that the number of wild cards in a hand does not diminish it in anyway; thus, with deuces wild, five of a kind comprised of 10, 10, 2, 2, 2 (five 10s) beats 8, 8, 8, 8, 2 (five 8s).
        </p>
      </section>
      <section className="rules-section">
        <h2>One-Eyed Cards</h2>
        <p>
        The king of diamonds and the jacks of spades and hearts show only one eye, whereas the other face cards all have two eyes. One-eyed jacks are sometimes designated as wild cards, but the king of diamonds is rarely selected to be wild.
        </p>
      </section>
      <section className="rules-section">
        <h2>Low Hole Card</h2>
        <p>
        In Stud Poker, each player's lowest "hole" card (that is, the lowest card that is dealt face down and not seen by the other players) is wild. In Draw Poker, the wild card would be the lowest card in a player's hand. When such a card is designated, it means that every card of that rank in that player's hand is wild, but the fact that a certain card is wild in one player's hand does not make that same rank of card wild in other players' hands.
        </p>
      </section>
      <section className="rules-section">
        <h2>Laws and Ethics</h2>
        <p>
        In every game, a written code of Poker laws should be used as the final arbiter for settling all questions. No Poker laws are universally followed - there are many local customs and preferences - but the Poker laws on this site embrace the latest customs of the most expert games and are recommended for adoption. It is a tradition of Poker that any club or group of players may make special rules, called "house rules," to suit their personal preferences. Of course, any such house rules should be written down.
        </p>
      </section>
      <section className="rules-section">
        <h2>Time Limit</h2>
        <p>
        Before play begins, the players should set a time limit for when the game ends and stick to it. Violation of this principle could eventually turn pleasant sessions into unpleasant ones. Often when the time for quitting is approaching, the host or one of the players will say "three more deals" or "through Zane's deal," so that players will know how many deals are left and can gauge their strategies accordingly.
        </p>
      </section>
    </div>
  );
};

export default PokerRules;