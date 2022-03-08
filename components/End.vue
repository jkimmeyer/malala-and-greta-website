<template>
  <div class="end">
    <div class="intro">
      End
    </div>
    <div class="content">
      <div class="mx-40 2xl:m-auto max-w-screen-xl">
        <div class="grid grid-cols-12">
          <div class="col-start-3 col-span-9" data-animate-parallax="100">
            <Image
              :decoration-top-left="true"
              :decoration-top-right="true"
              :decoration-bottom-left="true"
              :decoration-bottom-right="true"
              theme="default"
              path="/images/chapter/4/malala/malala-kapt4-bus.jpeg"
            />
          </div>
        </div>

        <div class="grid grid-cols-12">
          <div class="text text-right col-start-2 col-span-4" data-narrator-malala="bullet-silence" data-animate-reveal-right>
            “So today I met my role model. What else can I say?”
          </div>
          <div class="text text-right col-start-6 col-span-12" data-narrator-malala="bullet-silence" data-animate-reveal-right>
            “She's the only friend I'd skip school for”
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.end {
  background-color: var(--bone);
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(var(--khaki) 0%, var(--bone) 100%);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
