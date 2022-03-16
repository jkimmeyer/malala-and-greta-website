<template>
  <div class="end" data-controls-dark-end>
    <div>
      <div class="mx-40 2xl:m-auto max-w-screen-xl">
        <div class="grid grid-cols-12">
          <DecoratedImage
            class="col-start-4 col-span-6"
            :decoration-top-left="true"
            :decoration-top-right="true"
            :decoration-bottom-left="true"
            :decoration-bottom-right="true"
            theme="default"
            :path="require('~/assets/images/end/both-sitting-bench.jpeg')"
          />
        </div>

        <div class="grid grid-cols-12 mt-20">
          <div class="text-small greta col-start-3 col-span-3 " data-animate-reveal-left>
            “So today I met my role model. What else can I say?”
          </div>
          <div class="text-small malala col-start-8 col-span-3 mt-20" data-animate-reveal-right>
            “She's the only friend I'd skip school for”
          </div>
        </div>

        <div class="grid grid-cols-12 mt-60 items-center">
          <div class="col-start-2 col-span-3">
            <a href="https://fridaysforfuture.de/">
              <DecoratedImage
                class="mr-5"
                theme="default"
                :path="require('~/assets/images/end/logo-friday-for-future.png')"
              />
            </a>
          </div>
          <div class="col-start-5 col-span-5" data-animate-reveal-right>
            <a class="link-greta" href="https://fridaysforfuture.de/">Fridays for Future</a><br>
            <span class="text-small greta">Das sind alle, die für unser Klima auf die Straße gehen.</span>
          </div>
        </div>
        <div class="grid grid-cols-12 my-20 items-center">
          <div class="text-right col-start-4 col-span-4" data-animate-reveal-left>
            <a class="link-malala" href="https://malala.org/">Malala Fund</a><br>
            <span class="text-small malala">Working for a world where every girl can learn and lead.</span>
          </div>
          <div class="col-start-8 col-span-3">
            <a href="https://malala.org/">
              <DecoratedImage
                class="ml-5"
                theme="default"
                :path="require('~/assets/images/end/logo-malala-fund.png')"
              />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-12 mt-60">
          <div class="text-small text-center col-start-3 col-span-8">
            Wir erzählen die Geschichten von zwei starken jungen Frauen, die nie aufgehört haben für Gerechtigkeit, Wahrheit und Gleichheit zu kämpfen. Sie sind Vorbilder, die uns vor Augen führen, dass jeder etwas verändern und in der Welt bewirken kann.
          </div>
        </div>
        <!--- world and rocket -->
        <div class="grid grid-cols-12 mt-60">
          <DecoratedImage
            class="col-start-6 col-span-1 mr-5"
            data-animate-reveal-right
            theme="default"
            :path="require('~/assets/images/end/rocket.png')"
          />
        </div>
        <div class="grid grid-cols-12 items-center">
          <DecoratedImage
            class="col-start-3 col-span-3 mr-5"
            theme="default"
            :path="require('~/assets/images/end/world.png')"
          />
          <div class="text col-start-7 col-span-5" data-animate-reveal-right>
            Was willst du verändern?
          </div>
        </div>
        <!--- credits -->
        <div class="grid grid-cols-12 mt-80">
          <div class="body3 text-center col-start-2 col-span-10" data-animate-parallax="100">
            <span class="is-white">Ein Projekt der</span> Hochschule Düsseldorf <br>
            <span class="is-white">im Kurs</span> Digital Storytelling<br>
            <span class="is-white">betreut von</span> Lukas Loss<br>
          </div>
        </div>
        <div class="grid grid-cols-12 mt-60">
          <div class="body3 text-center col-start-2 col-span-10" data-animate-parallax="-100">
            <span class="is-white">erstellt von</span>  Cedric Oliveira da Silva Costa, Joel Garthe, Fabian Heck, Johannes Kimmeyer, Nathalie Merdan, Sam Vogelskamp
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.end {
  background-color: var(--bone);
  padding-bottom: 300px;
  padding-top: 300px;
}

.link-malala {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  transition: color 0.2s ease-in-out;

  &:link {
    color: var(--color-text-malala-dark);
    text-decoration: none;
  }

  &:visited {
    color: var(--color-text-malala-dark);
    text-decoration: none;
  }

  &:hover {
    color: var(--white);
    text-decoration: none;
  }

  &:active {
    color: var(--color-text-malala-dark);
    text-decoration: none;
  }
}
.link-greta {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  transition: color 0.2s ease-in-out;

  &:link {
    color: var(--color-text-greta-dark);
    text-decoration: none;
  }

  &:visited {
    color: var(--color-text-greta-dark);
    text-decoration: none;
  }

  &:hover {
    color: var(--white);
    text-decoration: none;
  }

  &:active {
    color: var(--color-text-greta-dark);
    text-decoration: none;
  }
}

.text {
  font-family: var(--sans-serif-font);
  font-size: 3rem;
  color: var(--deeptaupe);
  line-height: var(--line-1-15);
  font-weight:500;
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--deeptaupe);
  font-weight: 300;
}

.body3 {
  font-family: var(--sans-serif-font);
  font-size: var(--font-32);
  color: var(--deeptaupe);
}
.is-white {
  color: var(--white);
}

.malala {
  color: var(--color-text-malala-dark);
}

.greta {
  color: var(--color-text-greta-dark);
}

</style>
