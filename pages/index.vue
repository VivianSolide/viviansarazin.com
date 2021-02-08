<template>
  <div class="container">
    <img
      src="vivian-sarazin.jpg"
      alt="Vivian Sarazin"
      srcset=""
      class="rounded-full md:w-1/2 shadow-md"
    />
    <h1 class="mt-12">Vivian Sarazin</h1>
    <p>
      J'ai commencé mon aventure dans le web il y a presque 10 ans, en me
      formant de manière autodidacte à l'HTML & CSS via Codeacademy.
    </p>
    <p>
      J'ai professionnalisé ma démarche en devenant chef de projet web à la fin
      de mes études de management.
    </p>
    <p>
      Après plusieurs détours dans l'entrepreunariat et dans le Growth Hacking,
      j'ai décidé de me former de manière sérieuse à la programmation.
    </p>
    <p>
      J'ai donc tout d'abord intégré un premier bootcamp Web @IronHack puis un
      second en Data Science @Le Wagon.
    </p>
    <p>
      Ces compétences acquises dans différents langages, frameworks me
      permettent aujourd'hui d'apporter de la valeur ajoutée dans de nombreux
      projets.
    </p>
    <h2>Technologies</h2>
    <p>
      Pêle-mêle, voici une liste des technologies que j'apprécie. Liste non
      exhaustive en constante évolution.
      <i>Oui, à un moment je pensais que Bootstrap c'était le boss de fin...</i>
    </p>
    <h3>Data</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="md:col-span-1 col-span-2">
        <h4>Jupyter Notebook</h4>
        <p>
          C'est assez incroyable ce que peut faire un notebook. Ce que j'aime le
          plus dans cette approche, c'est de pouvoir itérer un maximum et
          récupérer toute la logique utile pour en faire des modules Python.
        </p>
      </div>
      <div class="md:col-span-1 col-span-2">
        <h4>Google Marketing</h4>
        <p>
          Avec la suite Google Marketing (Tag Manager, Analytics, Data Studio &
          Optimize), tout est possible. Seul défaut, ce n'est pas open-source
          certes, mais comment aujourd'hui s'en passer ?
        </p>
      </div>
      <div class="col-span-2">
        <h4>Scikit</h4>
        <p>
          Ce qui est assez dingue avec Scikit, c'est qu'on peut ne pas être un
          expert sur les probabilités, l'inférence bayésiennes et ces autres
          frivoles subtilités, il est toujours possible de sortir un résultat
          intelligible. <br />
          Et là, cette fois-ci c'est open-source !
        </p>
      </div>
    </div>
    <h3>Back</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <h4>Express</h4>
        <p>
          Express c'est le premier framework back-end que j'ai appris. Copuplé à
          MongoDB, on peut faire de très belles choses. Mais, en étudiant
          d'autres frameworks, je me suis rendu compte qu'avec Express on
          n'avait pas grand chose. C'est pour le coup très confortable, mais
          peut-être un peu limité ?
        </p>
      </div>
      <div class="md:col-span-1 col-span-2">
        <h4>Django</h4>
        <p>
          Autre salle, autre ambiance, Django est un framework plutôt puissant.
          Je ne l'ai pas encore poussé en production, mais j'apprécie beaucoup
          toutes les fonctionnalités permises et l'aspect configuration.
        </p>
      </div>
      <div class="md:col-span-1 col-span-2">
        <h4>Strapi</h4>
        <p>
          Toutefois, mon petit chouchou du moment reste Strapi. Ce n'est pas
          tout à fait un framework back-end, pas vraiment qu'un simple CMS,
          c'est un peu tout à la fois. Même si beaucoup d'améliorations doivent
          encore être faites, je trouve que pour un grand nombre de projets et
          de MVP, Strapi est plus que suffisant.
        </p>
      </div>
    </div>
    <h3>Front</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="md:col-span-1 col-span-2">
        <h4>VueJs</h4>
        <p>
          Lors de mes tutorats à IronHack, j'ai étudié les trois frameworks
          leaders que sont Angular, React et Vue. Loin de moi l'envie de dire
          qu'un tel et meilleur qu'un tel, mais j'ai quand même décidé de
          m'orienter vers Vue.<br />La principale raison à cela : la Developer
          eXperience (DX) de Vue qui est pour moi la plus agréable.
        </p>
      </div>
      <div class="md:col-span-1 col-span-2">
        <h4>Tailwind</h4>
        <p>
          Et oui, jadis je ne jurais que par Bootstrap mais ça c'était avant.
          <br />
          Là aussi, pas de jugements, je préfère tout simplement surcharger mon
          markup sur des composants et ne plus à avoir écrire des romans de
          .scss
        </p>
      </div>
      <div class="col-span-2">
        <h4>NuxtJs</h4>
        <p>
          Toutefois, je trouve que VueJs trouve tout son sens lorsqu'on utilise
          NuxtJs. Bon, c'est vrai qu'un framework sur un framework, ça ne part
          pas très bien, pour autant la DX sur NuxtJs devient incroyable. Tout y
          est : de la PWA au <i>full static</i> en passant par une intégration
          Tailwind de dingue, NuxtJs est devenu mon framework fétiche.
        </p>
      </div>
    </div>
    <h2>Se contacter</h2>
    <form name="contact" method="POST" data-netlify="true">
      <div class="grid grid-cols-1 gap-y-1 my-3">
        <div class="grid md:grid-cols-2 gap-y-1 grid-cols-1">
          <label class="block">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              class="w-full border"
            />
          </label>
          <label class="block">
            <input
              type="email"
              name="email"
              placeholder="votre@email.ici"
              class="w-full border"
            />
          </label>
        </div>

        <label class="block">
          <textarea
            name="message"
            placeholder="Lorem ipsum dolor sit amet consecutir toussa toussa ..."
            rows="5"
            class="w-full border"
          ></textarea>
        </label>
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>
