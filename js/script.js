new Vue({
  el: '#app',
  data() {
    return {
      modalTitle: null,
      playerBackup: null,
      players: null,
      player: {
        "id": "",
        "name": "",
        "position": "",
        "skills": "",
        "shirtNumber": "",
        "status": ""
      }
    }
  },
  mounted() {
    axios.get('http://localhost:3000/player/')
      .then(response => {
        console.log(response);
        this.players = response.data
      })
  },
  methods: {
    openModal: function (title, playerId) {
      
      if(title == 'Update player') {
        // Find player to update
        this.player = this.players.filter(function (player) {
          return player._id == playerId;
        })[0];
        
        // Set modal title
        this.modalTitle = title + ' ' + this.player.name;
  
        // Create a copy of player
        this.playerBackup = JSON.stringify(this.player);
      } else if (title == 'Add player') {
        this.modalTitle = title;
        this.player = {
          "id": "",
          "name": "",
          "position": "",
          "skills": "",
          "shirtNumber": "",
          "status": ""
        }
      }
   
    },
    addPlayer: function () {
      axios.post('http://localhost:3000/player/', this.player)
        .then(response => {
          console.log(response);
          this.player._id = response.data.newPlayerId;
          this.players.push(this.player);
        })
    },
    updatePlayer: function () {
      console.log(this.title);
      axios.patch('http://localhost:3000/player/' + this.player._id, this.player)
        .then(response => {
          console.log(response);
          if (response.status !== 200) {
            // Revert changes 
            this.currentPlayer = this.playerBackup;
            // Close modal
           
          }
          
        })
    },
    removePlayer: function (id) {
      this.players = this.players.filter(function (player) {
        return player._id !== id
      })
    },
    deletePlayer: function (id) {
      console.log(id)
      axios.delete('http://localhost:3000/player/' + id)
        .then(response => {
          this.removePlayer(id);
        })
    }
  }
})


$('#exampleModal').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM

});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();