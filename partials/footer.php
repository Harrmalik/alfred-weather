<footer class="ui inverted menu">
    <h2 class="ui header item"><a href="index.php">Home</a></h2>

    <a class="ui item" href id="switchAddr">Not your address?</a>

    <article class="ui basic modal">
      <div class="ui segment">
        <h3 class="ui header">Select a new address by entering a town</h3>
        <div class="ui action input">
          <input type="text" placeholder="New york"  ng-model="town">
          <button ng-click="newLocation(town)" id="modalClose" class="ui button">Select</button>
        </div>
      </div>
    </article>
</footer>

<!--                            CONTROLLERS                                                         -->
<script src="js/main.js" type="text/javascript"></script>
</body>
</html>
