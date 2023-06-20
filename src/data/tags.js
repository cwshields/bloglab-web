const tags = [
  {
    name: "storytime",
    color: "violet",
    description:
      "Explicabo beatae iure obcaecati, suscipit molestiae cum quod earum quo necessitatibus est, ipsum eaque dolorum ducimus ex, facere aspernatur! Quisquam enim possimus quas earum in molestias eius nobis alias.",
    guidelines:
      "Ea minus maiores inventore, placeat assumenda voluptas qui amet iure vero officiis dignissimos culpa vitae similique vel sequi.",
    icon: "https://imgur.com/Sil3hvd.png",
  },
  {
    name: "advice",
    color: "green",
    description:
      "Quisquam, odit rem doloribus accusantium similique itaque aspernatur sunt! Pariatur cupiditate eveniet et? Perferendis, consequatur vitae corrupti mollitia aspernatur ducimus ut dolorem.",
    guidelines:
      "Eaque illum labore tempora atque quod quas assumenda maiores, sint voluptatem soluta, corrupti, distinctio dolores porro molestiae nam.",
    icon: "https://imgur.com/Zfvma79.png",
  },
  {
    name: "inspiration",
    color: "black",
    description:
      "Necessitatibus ipsum deleniti adcum delectus quisquam officiis corrupti vero quod architecto fuga consequatur saepe quo explicabo cupiditate, porro odit aliquam quis vel unde? Ipsa, laborum? Deleniti, id. Amet, saepe inventore expedita solut explicabo tenetur.",
    guidelines:
      "Quam in fuga rem ad rerum nulla repellendus minima. Autem repudiandae dignissimos impedit debitis expedita consequatur illum commodi officia laborum illo.",
    icon: "https://imgur.com/ofaSWTU.png",
  },
  {
    name: "selfhelp",
    color: "magenta",
    description:
      "Reprehenderit quam in fuga rem ad rerum nulla repellendus minima. Autem repudiandae dignissimos impedit debitis expedita consequatur illum commodi officia laborum illo.",
    guidelines:
      "Beatae iure obcaecati, suscipit molestiae cum quod earum quo necessitatibus est, ipsum eaque dolorum ducimus ex, facere aspernatur! Quisquam enim possimus quas earum in molestias eius nobis alias.",
    icon: "https://imgur.com/XBII8hz.png",
  },
  {
    name: "philosophy",
    color: "orange",
    description:
      "Cupiditate architecto voluptatum esse laudantium, temporibus excepturi tempore iure voluptatem reprehenderit quod officiis delectus vero quaerat ab inventore aut consequuntur accusantium fugit alias autem quasi reiciendis aliquid nobis.",
    guidelines:
      "Necessitatibus ipsum deleniti adcum delectus quisquam officiis corrupti vero quod architecto fuga consequatur saepe quo explicabo cupiditate.",
    icon: "https://imgur.com/2lUPL64.png",
  },
  {
    name: "life",
    color: "red",
    description:
      "Eaque illum labore tempora atque quod quas assumenda maiores, sint voluptatem soluta, corrupti, distinctio dolores porro molestiae nam. Ea minus maiores inventore, placeat assumenda voluptas qui amet iure vero officiis dignissimos culpa vitae similique vel sequi.",
    guidelines:
      "Temporibus excepturi tempore iure voluptatem reprehenderit quod officiis delectus vero quaerat ab inventore aut consequuntur accusantium fugit alias autem quasi reiciendis aliquid nobis.",
    icon: "https://imgur.com/IHyINsF.png",
  },
  {
    name: "jobs",
    color: "blue",
    description:
      "Ipsum eaque dolorum ducimus assumenda voluptas qui amet iure vero officiis dignissimos culpa vitae similique vel sequi",
    guidelines:
      "Aperiam quod voluptas ipsum cupiditate unde amet excepturi labore repudiandae ipsa voluptate quisquam porro quasi optio.",
    about:
      "Temporibus excepturi tempore iure voluptatem reprehenderit quod officiis delectus vero quaerat ab inventore aut consequuntur accusantium fugit alias autem quasi reiciendis aliquid nobis.",
    icon: "https://imgur.com/Ohsi6TN.png",
  },
  {
    name: "society",
    color: "teal",
    description:
      "Exercitationem quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    guidelines:
      "Magni autem nesciunt earum culpa repellat harum aperiam quod voluptas ipsum cupiditate unde amet excepturi labore repudiandae ipsa voluptate quisquam porro quasi optio, iste neque beatae.",
    icon: "https://imgur.com/dlgTHeW.png",
  },
  {
    name: "technology",
    color: "gray",
    description:
      "Magni autem nesciunt earum culpa repellat harum aperiam quod voluptas ipsum cupiditate unde amet excepturi labore repudiandae ipsa voluptate quisquam porro quasi optio, iste neque beatae. Atque minus rerum error fugiat nisi officiis, unde fuga adipisci.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/iiVBf7F.png",
  },
  {
    name: "science",
    color: "aqua",
    description:
      "Taiores at magni eveniet mollitia doloribus consequatur quibusdam harum ipsa pariatur quae itaque autem cupiditate totam perferendis, obcaecati quos ipsam unde quidem nesciunt veritatis recusandae necessitatibus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/v2sdQiW.png",
  },
  {
    name: "writing",
    color: "emerald",
    description:
      "Maiores at magni eveniet mollitia doloribus consequatur quibusdam harum ipsa pariatur quae itaque autem cupiditate totam perferendis, obcaecati quos ipsam unde quidem nesciunt veritatis recusandae necessitatibus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/XgJWNTj.png",
  },
  {
    name: "news",
    color: "biscotti",
    description:
      "Ratione aliquam tempora expedita architecto nisi ipsa molestiae enim dolore saepe magni esse nostrum exercitationem quod non voluptates sunt, voluptate dolorum officiis reiciendis. Tempore delectus animi dolore quis, quisquam doloribus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/mUiX0Sk.png",
  },
  {
    name: "design",
    color: "crimson",
    description:
      "Sint modi molestias error nesciunt ducimus sed magnam delectus magni cum, consequatur fuga exercitationem vero reprehenderit mollitia voluptates facilis esse, tempora eum perspiciatis doloremque numquam hic.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/rGjMrUt.png",
  },
  {
    name: "help",
    color: "pink",
    description:
      "Impedit possimus obcaecati maiores. Repudiandae, quae odit omnis hic nihil quia recusandae. Ipsam unde necessitatibus adipisci numquam veritatis id dolor illum officia tempora doloribus cum dolorum recusandae nulla a quasi iste aperiam magni est incidunt, autem perferendis nemo ad.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/1bVXMS4.png",
  },
  {
    name: "learning",
    color: "white",
    description:
      "Pariatur perferendis iure reiciendis quo nisi ipsam, cupiditate adipisci saepe assumenda autem, alias fugiat modi dolore qui obcaecati corporis soluta provident. Minus est iste ipsam harum commodi cupiditate, vero voluptates adipisci consequuntur quis accusamus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/X8XhJGY.png",
  },
  {
    name: "recipe",
    color: "brown",
    description:
      "Pariatur perferendis iure reiciendis quo nisi ipsam, cupiditate adipisci saepe assumenda autem, alias fugiat modi dolore qui obcaecati corporis soluta provident. Minus est iste ipsam harum commodi cupiditate, vero voluptates adipisci consequuntur quis accusamus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/GCFUaOm.png",
  },
  {
    name: "community",
    color: "violet",
    description:
      "Pariatur perferendis iure reiciendis quo nisi ipsam, cupiditate adipisci saepe assumenda autem, alias fugiat modi dolore qui obcaecati corporis soluta provident. Minus est iste ipsam harum commodi cupiditate, vero voluptates adipisci consequuntur quis accusamus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/ayp96o1.png",
  },
  {
    name: "business",
    color: "teal",
    description:
      "Pariatur perferendis iure reiciendis quo nisi ipsam, cupiditate adipisci saepe assumenda autem, alias fugiat modi dolore qui obcaecati corporis soluta provident. Minus est iste ipsam harum commodi cupiditate, vero voluptates adipisci consequuntur quis accusamus.",
    guidelines:
      "Quisquam aperiam in sint itaque sed tenetur dolor officia neque nemo, aspernatur debitis sequi asperiores qui aliquam soluta ex harum libero molestiae inventore officiis ut.",
    icon: "https://imgur.com/d5PuPnT.png",
  },
];

export default tags;
