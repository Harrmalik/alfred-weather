<?php include "partials/header.php" ?>

    <section>
      <div id="container" class="ui segment compact blue">
        <h2 class="ui header">{{forecast.city.name}}, {{region.region}}
          <div class="ui sub header">
                {{ getFullDate(forecast.list[0].dt) | date : 'EEEE MMM d, h:mm a'}}
            </div>
        </h2>
        <div class="ui horizontal yellow statistic">
          <div class="value">
            {{ toFahrenheit(forecast.list[0].main.temp) }}
          </div>
          <div class="label">
            <a href ng-click="">F</a> | <a href ng-click="">C</a>
          </div>
        </div>
        <div class="ui divider"></div>
        <p>{{toFahrenheit(forecast.list[0].main.temp_min) + " |  " + toFahrenheit(forecast.list[0].main.temp_max)}}</p>
        <div class="ui divider"></div>

        <div class="ui statistics  inverted">
          <div class="statistic">
            <div class="value">
              {{forecast.list[0].main.humidity}}&#37;
            </div>
            <div class="label">
              Humindity
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              {{forecast.list[0].wind.speed}}
            </div>
            <div class="label">
              Wind
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              {{forecast.list[0].clouds.all}}
            </div>
            <div class="label">
              Cloud
            </div>
          </div>
        </div>

        <div class="ui basic segment">
          {{forecast.list[0].weather[0].description}}
          <img ng-src="http://openweathermap.org/img/w/{{forecast.list[0].weather[0].icon}}.png" />
          <p>Beautiful day to listen to summer vibes and relax to cool feeling of the wind</p>
        </div>

      </div>
      <button class="ui button" ng-click="showing = !showing">Full Forecast</button>

      <article id="fullForecast" ng-show="showing" class="ui secondary segment">
       <div class="ui cards">
          <div class="ui card forecast"  ng-hide="{{$index > 6}}" ng-repeat="weather in forecast.list">
            <div class="content">
             <div class="right floated meta">14h</div>
               {{getFullDate(forecast.list[$index].dt)}}
            </div>
            <div class="image">
             <img class="ui avatar image" ng-src="http://openweathermap.org/img/w/{{forecast.list[$index].weather[0].icon}}.png">
            </div>
            <div class="content">
             <i class="heart outline like icon"></i>
             {{toFahrenheit(forecast.list[$index].main.temp_min) + " |  " + toFahrenheit(forecast.list[$index].main.temp_max)}}
            </div>
          </div>
       </div>
      </article>
    </section>

    <?php include "partials/footer.php" ?>
