<template>
  <card>
    <img slot="image" :src="cardbackground"/>
    <div class="text-center" slot="body">
        <img class="avatar border-light rounded-circle" :src="profile" alt="..."/>
        <hr></hr>
        <h4 class="title">First LastName</h4>
          <h5>Username</h5>
        <p class="text-center"> "Lamborghini Mercy <br>
          Your chick she so thirsty <br>
          I'm in that two seat Lambo"
        </p>
    </div>

    <div slot="footer">
      <div class="d-flex justify-content-around">
        <a href="#"><v-icon name="facebook"></v-icon></a>
        <a href="#"><v-icon name="twitter"></v-icon></a>
        <a href="#"><v-icon name="instagram"></v-icon></a>
      </div>
    </div>
  </card>
</template>
<script>
  import Card from '@/components/utilities/card.vue'
  export default {
    components: {
      Card
    },
    data () {
      return {
        cardbackground: require('@/assets/imgs/cardbackground.jpg'),
        profile: require('@/assets/imgs/profile.png'),
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }
</script>
<style scoped>
.icon {
  height: 25px;
  width: 25px;
}
.avatar{
  margin-top: -100px;
  height: 150px;
  width: 150px;
  border-width: 3px;
  border-style: solid;
}

a:link {
    color: #b2b2b2!important;
}

a:focus {
    color: #ffffff;
}
a:hover {
    color: #ffffff;
}
a:visited {
    color: #b2b2b2!important;
}
</style>
