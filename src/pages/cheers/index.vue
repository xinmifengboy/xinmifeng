<template>
  <div>
    <h1>扑克牌</h1>
    <div v-for="card in deck" :key="card.id" class="card">
      {{ card.rank }} {{ card.suit }}
    </div>
    <button @click="shuffleDeck">洗牌</button>
    <button @click="sendDeck">发牌</button>
    <h1> player 1: <span v-for="play in player1" :key="play.id" class="card">{{ play.rank }} {{ play.suit }}</span></h1>
    <h1> player 2</h1>
    <h1> player 3</h1>
    <h1> player 4</h1>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

const deck = reactive([] as { id: number; rank: string; suit: string }[]);

// 玩家
const player = reactive([] as { id: number; rank: string; suit: string }[]);

const player1 = reactive([] as { id: number; rank: string; suit: string }[]);

//  all data
const generateDeck = () => {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♠', '♥', '♦', '♣'];

  let id = 1;
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ id, rank, suit });
      id++;
    }
  }

  // Add two joker cards
  deck.push({ id: 53, rank: 'Joker', suit: '🃏' });
  deck.push({ id: 54, rank: 'Joker', suit: '🃏' });
};

//  洗牌
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffleDeck = () => {
  const shuffledDeck = shuffle(deck);
  console.log(shuffledDeck)
}

// 示例用法



//  抽牌
const sendDeck = () => {
  player1.push(deck[0])
  deck.shift();
}




onMounted(() => {
  generateDeck();
});
</script>

<style scoped>
.card {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
