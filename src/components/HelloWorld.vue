<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row
        dense
        align="center"
        justify="center"
      >
        <v-col
        v-for="(card, index) in visibleCards"
        :key="index"
        cols="12"
        sm="4"
        class="d-flex justify-center"
        >
          <v-card
            class="valentine-card"
            style="height: 300px; width: 550px;"
          >
            <v-card-text>
              <p class="text-h4 pink--text text--darken-2 font-italic">{{ card.word }}</p>
              <div class="deep-purple--text text--darken-3">
                {{ card.definition }}<br>
                <i>"{{ card.example }}"</i>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                small
                color="pink darken-2"
                dark
                @click="card.reveal = true"
              >
                💌 Learn More
              </v-btn>
            </v-card-actions>
            <div
            v-if="card.gif"
            class="gif-wrapper"
            >
            <iframe
              :src="card.gif"
              width="120"
              height="120"
              frameborder="0"
              allowfullscreen
              class="rounded"
            />
             </div>
            <v-expand-transition>
              <v-card
                v-if="card.reveal"
                class="transition-fast-in-fast-out v-card--reveal valentine-reveal"
              >
                <v-card-text class="pb-0">
                  <p class="text-h5 pink--text text--darken-2">✨ {{ card.originTitle }}</p>
                  <p class="deep-purple--text text--darken-3">{{ card.origin }}</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    small
                    color="red lighten-2"
                    dark
                    @click="closeCard(index)"
                  >
                    Close 💔
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      revealedOrder: 0,
      cards: [
      {
        reveal: false,
        word: 'Happy monthsary, jumbi :)',
        definition: 'Whats new today?',
        example: 'Click on learn more to learn more!!',
        origin: `1 Day till our black bird date! I cant wait to see you in a dress. I cant wait to have our pics taken. Thank you for letting me celebrate our anniversary this way :)`,
        originTitle: 'It is our 1st Monthsary! But also, OUR 1st ANNIVERSARY CELEBRATION ^^',
        gif: 'https://tenor.com/embed/14531661802041862698'
      },
      {
        reveal: false,
        word: 'AJU?!?!?!? THERES MORE??!?!',
        definition: 'Are you wondering what your jubi is up to?',
        example: 'Click on learn more to learn more!!!',
        origin: `I just saw this on tiktok lang literally when were at koomi. inisip ko sa hapon ko na gawin but I cant sleep naman rin :) I just want to make a little something for my jubi.`,
        originTitle: `HAPPY GF'S DAY!!!! KRRKKRKRKRR.`,
        gif: 'https://tenor.com/embed/17300806671807613997'
      },
      {
        reveal: false,
        word: 'Lastly.....',
        definition: 'Last na my abumju....',
        example: 'Last learn more na po......',
        origin: `I just wanna say I love you`,
        originTitle: 'I wanna be with you for the rest of my life. I can only do so much, ja. Sowee if i get a lot of mistakes rin. Ill love jubi with all I got okay? Lets make this relationship work together.. woki??? pinky promise??? I LOVE YOU. TELL ME YOU LOVE ME~',
        gif: 'https://tenor.com/embed/6311797480311160940'
      },
      ],
    };
  },
  computed: {
  visibleCards() {
    return this.cards.slice(0, this.revealedOrder + 1);
  }
},
methods: {
  closeCard(index) {
    this.cards[index].reveal = false;
    this.revealedOrder = Math.max(this.revealedOrder, index + 1);
  }
}
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff0f5; /* soft pink */
  z-index: 1;
  overflow-y: auto;
  padding: 16px;
}
.valentine-card {
  background: linear-gradient(to bottom right, #ffe6eb, #fce4ec);
  border: 2px solid #f8bbd0;
  box-shadow: 0 8px 20px rgba(255, 105, 135, 0.2);
  border-radius: 16px;
  transition: transform 0.3s ease;

}

.valentine-card:hover {
  transform: translateY(-5px);
}

.valentine-reveal {
  border-radius: 16px;
  box-shadow: inset 0 0 20px rgba(255, 105, 135, 0.2);
}

.v-application {
  background: linear-gradient(to bottom right, #f6d365, #fda085) !important;
}

.gif-wrapper {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 0;
}
</style>
