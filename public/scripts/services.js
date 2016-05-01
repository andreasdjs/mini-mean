'use strict';

app.service('dataService', function($http) {

  /* Get current user */

   this.getCurrentUser = function(cb) {
    $http.get('/api/currentUser').then(cb);
  }; 

  /* Get all users and their skills */

  this.getSkills = function(cb) {
    $http.get('/api/skills').then(cb);
  };

  /* Get list of top 10 users matching current users skills */

// $scope.me.user

  this.getSkillsTopMatches = function(cb) {
    $http.get('/api/skillsTopMatches').then(cb);
  };

  /* More information about each skill */

  this.getSkillDetails = function(cb) {
    $http.get('/api/availableSkills').then(cb);
  };

 /* Save user */

   this.updateSkills = function(me) {

/*
    console.log("Trigger save service");
    console.log(me);
    console.log(me.user);
    console.log("------");
*/

      $http.put('/api/updateSkills/' + me.user, me).then(function(result) {
//        return result.data.animal;
      });


/*
    if(!animal._id) {
      $http.post('/api/user', animal);
    } else {
      $http.put('/api/user/' + animal._id, animal).then(function(result) {
        return result.data.animal;
      });
    }

    */
  };


  /* Delete skill by user */


  /* Update/add skill by user */


/*
  this.deleteAnimal = function(animal) {
    if (!animal._id) {
      //return $q.resolve();
      console.log("Error, no id");
    }
    return $http.delete('/api/animals/' + animal._id).then(function() {
      console.log("I deleted the " + animal.name);
    });
  };

  this.updateAnimal = function(animal) {
    if(!animal._id) {
      $http.post('/api/animals', animal);
    } else {
      $http.put('/api/animals/' + animal._id, animal).then(function(result) {
        return result.data.animal;
      });
    }
  };
*/

});