import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
  id: 'store',
  
  state: () => ({
    searchInput: ref('Empty'),
    commentsCount: ref(0),
    likes: ref(0),
    dislikes: ref(0),
    isCreate: ref(false),
    comments: ref([]),
    newComment: '',
    url: 'http://localhost:9999/',
  }),

  actions: {
    changeSearchInput(phone) {
        this.searchInput = phone;
        
        if (this.searchInput !== '') {
          fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action": "search_phone", "phone": this.searchInput})
          }).then(response => {
            return response.json();
          }).then(data => {
            if (data?.data?.data) {
              this.isCreate = true;
              this.comments = [];
            } else {
              this.isCreate = false;
            }
            this.comments = data.data.data.messages;
            this.commentsCount = data.data.data.data_of_phone.messages_count;
            this.likes = data.data.data.data_of_phone.likes;
            this.dislikes = data.data.data.data_of_phone.dislikes;
          }).catch(error => {
            console.log('Произошла ошибка:', error);
          });

      } else {
          console.log('Empty input');
      }
    },

    createComment(event) {
      let rate = 0;
      this.commentsCount += 1;
      
      if (event.target.getAttribute('class') == 'like-btn') {
        rate = 1;
        this.likes += 1;
      } else {
        this.dislikes += 1;
      }

      this.newComment = event.target.parentNode.previousSibling.value;
      setTimeout(() => {
        event.target.parentNode.previousSibling.value = '';
      }, 0);

      fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action": "create_message", "phone": this.searchInput, "message": this.newComment, "rate": rate})
          }).then(response => {
            this.comments.unshift({'message': this.newComment, rate: rate, 'create_date': this.formattedDateTime()})
            return response.json();
          }).catch(error => {
            console.log('Произошла ошибка:', error);
          });
    },

    createTable() {
      this.isCreate = false;
      fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action": "search_phone", "phone": this.searchInput})
          }).then(response => {
            return response.json();
          }).catch(error => {
            console.log('Произошла ошибка:', error);
          });
    },
    
    formattedDateTime() {
      let currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
  },
});
