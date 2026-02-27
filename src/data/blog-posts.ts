export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  content: string;
  relatedServices: string[];
  relatedPosts: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "si-te-kurseni-energji-elektrike-ne-shtepi",
    title: "Si të kurseni energji elektrike në shtëpi",
    description: "Mësoni mënyra praktike për të ulur konsumin e energjisë elektrike në shtëpi dhe për të kursyer para në faturën mujore.",
    excerpt: "Zbuloni këshilla të thjeshta por efektive për të reduktuar konsumin e energjisë elektrike në shtëpinë tuaj dhe për të ulur faturat mujore.",
    date: "2025-12-15",
    relatedServices: ["riparime-elektrike"],
    relatedPosts: ["avantazhet-e-ndricimit-led", "kontrolli-periodik-i-sistemit-elektrik"],
    content: `
      <p>Kursimi i energjisë elektrike në shtëpi nuk është vetëm një çështje ekonomike — është edhe një përgjegjësi ndaj mjedisit. Me disa ndryshime të vogla në zakonet e përditshme, ju mund të reduktoni ndjeshëm faturën e energjisë.</p>

      <h2>1. Përdorni ndriçim LED</h2>
      <p>Llambat LED konsumojnë deri në 80% më pak energji se llambat tradicionale inkandeshente. Edhe pse kostoja fillestare është pak më e lartë, ato zgjasin deri në 25,000 orë dhe ju kursejnë para në afat të gjatë. Lexoni më shumë rreth <a href="/blog/avantazhet-e-ndricimit-led">avantazheve të ndriçimit LED</a>.</p>

      <h2>2. Fikni pajisjet kur nuk i përdorni</h2>
      <p>Shumë pajisje elektronike konsumojnë energji edhe kur janë në gjendje standby. Televizorët, kompjuterët dhe karikuesit e telefonave vazhdojnë të tërheqin rrymë. Përdorni priza me çelës për t'i fikur plotësisht.</p>

      <h2>3. Kontrolloni izolimin e shtëpisë</h2>
      <p>Një shtëpi e izoluar mirë kërkon më pak energji për ngrohje dhe ftohje. Kontrolloni dritaret, dyert dhe muret për rrjedhje ajri. Investimi në izolim të mirë kthehet shumëfish.</p>

      <h2>4. Përdorni pajisje me efikasitet të lartë energjitik</h2>
      <p>Kur blini pajisje të reja shtëpiake, zgjidhni ato me klasë energjitike A++ ose më lart. Frigoriferi, lavatriçja dhe pjatalarësja janë ndër konsumatorët më të mëdhenj të energjisë në shtëpi.</p>

      <h2>5. Programoni termostatin</h2>
      <p>Një termostat i programueshëm ju lejon të rregulloni temperaturën automatikisht sipas orarit tuaj. Ulja e temperaturës me vetëm 1°C mund të kursejë deri në 10% të faturës së ngrohjes.</p>

      <h2>6. Kontrolloni sistemin elektrik rregullisht</h2>
      <p>Një sistem elektrik i mirëmbajtur funksionon më efikasshëm. <a href="/blog/kontrolli-periodik-i-sistemit-elektrik">Kontrolli periodik i sistemit elektrik</a> ndihmon në identifikimin e problemeve që mund të shkaktojnë humbje energjie.</p>

      <p>Nëse dëshironi të bëni një vlerësim të plotë të sistemit tuaj elektrik për efikasitetin energjitik, <a href="/sherbimet/riparime-elektrike">ekipi ynë i specializuar</a> mund t'ju ndihmojë. <a href="/kontakt">Na kontaktoni</a> për një konsulencë pa detyrime.</p>
    `,
  },
  {
    slug: "kur-duhet-te-ndryshoni-instalimet-elektrike",
    title: "Kur duhet të ndryshoni instalimet elektrike?",
    description: "Mësoni shenjat që tregojnë se instalimet elektrike të shtëpisë suaj kanë nevojë për ndërhyrje profesionale.",
    excerpt: "Instalimet elektrike të vjetruara mund të jenë të rrezikshme. Zbuloni kur është koha për t'i ndryshuar ato.",
    date: "2025-12-10",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["shenjat-e-problemeve-elektrike-ne-shtepi", "kontrolli-periodik-i-sistemit-elektrik"],
    content: `
      <p>Instalimet elektrike janë zemra e çdo shtëpie. Me kalimin e viteve, ato vjetrohen dhe mund të bëhen të rrezikshme. Por si e dini kur është koha për t'i ndryshuar?</p>

      <h2>Mosha e instalimeve</h2>
      <p>Nëse shtëpia juaj ka më shumë se 25-30 vjet dhe instalimet nuk janë ndryshuar kurrë, është koha për një inspektim profesional. Kabllot e vjetra mund të jenë të dëmtuara nga koha, brejtësit ose lagështira.</p>

      <h2>Shenjat paralajmëruese</h2>
      <p>Ka disa <a href="/blog/shenjat-e-problemeve-elektrike-ne-shtepi">shenja që tregojnë probleme elektrike</a> dhe nevojën për ndërhyrje:</p>
      <ul>
        <li>Siguresat bien shpesh</li>
        <li>Prizat nxehen ose kanë erë djegieje</li>
        <li>Dritat vezullojnë pa arsye</li>
        <li>Ngjyra e verdhë ose njolla në prizat murale</li>
        <li>Zhurma të çuditshme nga tabela elektrike</li>
      </ul>

      <h2>Kur bëni rinovim</h2>
      <p>Nëse jeni duke rinovuar shtëpinë, është momenti ideal për të përmirësuar edhe instalimet elektrike. Kjo ju kursen kohë dhe para në të ardhmen. Shërbimi ynë i <a href="/sherbimet/planifikim-elektrik">planifikimit elektrik</a> ju ndihmon të planifikoni gjithçka nga fillimi.</p>

      <h2>Rritja e ngarkesës elektrike</h2>
      <p>Shtëpitë moderne kanë shumë më tepër pajisje se 20 vjet më parë. Nëse përdorni shumë shtesat me priza (çok), kjo është shenjë se sistemi juaj nuk ka mjaftueshëm dalje elektrike.</p>

      <h2>Pas blerjes së shtëpisë së re</h2>
      <p>Kur blini një shtëpi të përdorur, gjithmonë bëni një <a href="/blog/kontrolli-periodik-i-sistemit-elektrik">kontroll periodik të sistemit elektrik</a> para se të vendoseni. Kjo ju jep siguri dhe qetësi mendore.</p>

      <p>Ekipi i <a href="/sherbimet/riparime-elektrike">Onerald Electrics</a> është i gatshëm t'ju ndihmojë me çdo lloj riparimie apo ndryshimi të instalimeve elektrike. <a href="/kontakt">Na kontaktoni</a> për një vlerësim pa detyrime.</p>
    `,
  },
  {
    slug: "cfare-duhet-te-dini-para-se-te-blini-priza-te-reja",
    title: "Çfarë duhet të dini para se të blini priza të reja",
    description: "Udhëzues i plotë për zgjedhjen e prizave të reja për shtëpinë tuaj - llojet, cilësia dhe instalimi i sigurt.",
    excerpt: "Para se të blini priza të reja, ka disa gjëra të rëndësishme që duhet të merrni parasysh për sigurinë dhe cilësinë.",
    date: "2025-12-05",
    relatedServices: ["riparime-elektrike"],
    relatedPosts: ["siguria-elektrike-per-femijet", "shenjat-e-problemeve-elektrike-ne-shtepi"],
    content: `
      <p>Prizat elektrike janë ndër elementët më të përdorur në shtëpi, por shpesh nuk u kushtojmë vëmendjen e duhur. Zgjedhja e prizave të duhura ndikon në sigurinë dhe komoditetin e shtëpisë suaj.</p>

      <h2>Llojet e prizave</h2>
      <p>Në Shqipëri përdoren kryesisht prizat e tipit Schuko (Tip F), që janë standardi evropian. Sigurohuni që prizat e reja të jenë të certifikuara sipas standardeve CE.</p>

      <h2>Materiali dhe cilësia</h2>
      <p>Mos kurseni në cilësinë e prizave. Prizat me cilësi të ulët mund të nxehen, të shkëndijnë ose edhe të shkaktojnë <a href="/blog/mbrojtja-nga-zjarri-shkaqet-elektrike">zjarre</a>. Zgjidhni marka të njohura si Legrand, Schneider ose Vimar.</p>

      <h2>Prizat me mbrojtje për fëmijët</h2>
      <p>Nëse keni fëmijë të vegjël, zgjidhni priza me mbrojtje integrale (child protection). Kjo parandalon futjen e objekteve në priza. Lexoni më shumë rreth <a href="/blog/siguria-elektrike-per-femijet">sigurisë elektrike për fëmijët</a>.</p>

      <h2>Prizat me tokëzim</h2>
      <p>Çdo prizë duhet të ketë lidhje tokëzimi (grounding). Kjo është thelbësore për sigurinë — mbron nga goditjet elektrike në rast defekti.</p>

      <h2>Numri i prizave</h2>
      <p>Planifikoni mjaftueshëm priza për çdo dhomë. Një gabim i zakonshëm është vendosja e pak prizave, duke detyruar përdorimin e shtesave. Konsultohuni me shërbimin tonë të <a href="/sherbimet/planifikim-elektrik">planifikimit elektrik</a> për numrin optimal.</p>

      <h2>Instalimi profesional</h2>
      <p>Mos provoni t'i instaloni vetë prizat nëse nuk keni përvojë. Instalimi i gabuar mund të jetë i rrezikshëm. Ekipi ynë i <a href="/sherbimet/riparime-elektrike">riparimeve elektrike</a> mund t'i instalojë shpejt dhe në mënyrë të sigurt.</p>

      <p>Keni nevojë për ndihmë me zgjedhjen ose instalimin e prizave? <a href="/kontakt">Na kontaktoni</a> për këshilla profesionale.</p>
    `,
  },
  {
    slug: "avantazhet-e-ndricimit-led",
    title: "Avantazhet e ndriçimit LED",
    description: "Pse ndriçimi LED është zgjedhja më e mirë për shtëpinë dhe biznesin tuaj - kursim energjie, jetëgjatësi dhe cilësi drite.",
    excerpt: "Ndriçimi LED ofron kursim të madh energjie dhe jetëgjatësi të lartë. Zbuloni pse duhet të kaloni në LED.",
    date: "2025-11-28",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["si-te-kurseni-energji-elektrike-ne-shtepi", "planifikimi-elektrik-per-ndertesa-te-reja"],
    content: `
      <p>Teknologjia LED ka revolucionarizuar mënyrën si ndriçojmë shtëpitë dhe bizneset tona. Me avantazhe të shumta ndaj llambave tradicionale, ndriçimi LED është bërë standardi i ri.</p>

      <h2>Kursim i jashtëzakonshëm energjie</h2>
      <p>Llambat LED konsumojnë 75-80% më pak energji se llambat inkandeshente. Një llambë LED 10W jep të njëjtën dritë sa një llambë e vjetër 60W. Kjo do të thotë <a href="/blog/si-te-kurseni-energji-elektrike-ne-shtepi">kursim i madh në faturën e energjisë</a>.</p>

      <h2>Jetëgjatësi e lartë</h2>
      <p>Llambat LED zgjasin 25,000-50,000 orë, krahasuar me 1,000 orë për llambat inkandeshente. Kjo do të thotë më pak ndryshime dhe më pak shpenzime në afat të gjatë.</p>

      <h2>Cilësi e lartë drite</h2>
      <p>LED-t ofrojnë dritë të qëndrueshme pa vezullime. Ju mund të zgjidhni temperaturën e dritës — nga e ngrohtë (2700K) deri tek e ftohtë (6500K) — sipas preferencës dhe ambientit.</p>

      <h2>Miqësorë me mjedisin</h2>
      <p>Llambat LED nuk përmbajnë merkur ose substanca të tjera toksike. Ato prodhojnë më pak nxehtësi dhe kanë gjurmë më të vogël karboni.</p>

      <h2>Fleksibilitet në dizajn</h2>
      <p>LED-t vijnë në forma, madhësi dhe ngjyra të ndryshme. Nga shiritat LED deri tek panelet, spotet dhe llambat dekorative — mundësitë janë të pakufishme.</p>

      <h2>Investim i zgjuar</h2>
      <p>Edhe pse çmimi fillestar i LED-ve është më i lartë, kthimi i investimit vjen brenda muajve të parë falë kursimit në energji. Për projektet e reja, shërbimi ynë i <a href="/sherbimet/planifikim-elektrik">planifikimit elektrik</a> përfshin konsulencë për ndriçimin optimal.</p>

      <p>Dëshironi të kaloni në ndriçim LED? <a href="/sherbimet/riparime-elektrike">Ekipi ynë</a> mund t'ju ndihmojë me instalimin. <a href="/kontakt">Na kontaktoni</a> për një ofertë.</p>
    `,
  },
  {
    slug: "si-te-zgjidhni-elektricistin-e-duhur",
    title: "Si të zgjidhni elektricistin e duhur",
    description: "Këshilla për zgjedhjen e një elektricisti profesional dhe të besueshëm për punët elektrike në shtëpinë tuaj.",
    excerpt: "Zgjedhja e elektricistit të duhur është vendimtare për sigurinë e shtëpisë suaj. Ja si ta bëni këtë zgjedhje.",
    date: "2025-11-20",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["shenjat-e-problemeve-elektrike-ne-shtepi", "standardet-elektrike-ne-shqiperi"],
    content: `
      <p>Puna elektrike kërkon njohuri të specializuara dhe përvojë. Zgjedhja e gabuar e elektricistit mund të sjellë probleme serioze të sigurisë. Ja disa kritere për të bërë zgjedhjen e duhur.</p>

      <h2>Kërkoni liçencën dhe kualifikimet</h2>
      <p>Një elektricist profesional duhet të ketë liçencën e nevojshme për të punuar. Në Shqipëri, elektricistët duhet të respektojnë <a href="/blog/standardet-elektrike-ne-shqiperi">standardet elektrike kombëtare</a>. Kërkoni certifikata dhe trajnime profesionale.</p>

      <h2>Kontrolloni përvojën</h2>
      <p>Pyetni sa vjet përvojë ka elektricisti dhe çfarë lloj punësh ka bërë. Një elektricist me përvojë do të dijë të trajtojë situata të ndryshme me profesionalizëm.</p>

      <h2>Kërkoni referenca</h2>
      <p>Një elektricist i mirë do të ketë klientë të kënaqur që mund t'ju japin referenca. Kontrolloni edhe komentet online nëse janë të disponueshme.</p>

      <h2>Merrni ofertë të detajuar</h2>
      <p>Para se të filloni punën, kërkoni një ofertë me shkrim që përfshin materialet, punën dhe kohën e parashikuar. Kjo ju mbron nga surpriza me çmimet.</p>

      <h2>Garancia e punës</h2>
      <p>Një elektricist profesional ofron garanci për punën e kryer. Kjo tregon besim në cilësinë e shërbimit.</p>

      <h2>Disponueshmëria për urgjenca</h2>
      <p>Problemet elektrike mund të ndodhin në çdo moment. Është e rëndësishme të keni një elektricist që ofron shërbim edhe jashtë orarit.</p>

      <p>Në Onerald Electrics, ne plotësojmë të gjitha këto kritere. Ofrojmë <a href="/sherbimet/riparime-elektrike">riparime elektrike</a> dhe <a href="/sherbimet/planifikim-elektrik">planifikim elektrik</a> profesional. <a href="/kontakt">Na kontaktoni</a> për t'u bindur vetë.</p>
    `,
  },
  {
    slug: "shenjat-e-problemeve-elektrike-ne-shtepi",
    title: "Shenjat e problemeve elektrike në shtëpi",
    description: "Mësoni të njihni shenjat e hershme të problemeve elektrike në shtëpinë tuaj para se të bëhen të rrezikshme.",
    excerpt: "Mos i injoroni këto shenja paralajmëruese - ato mund të tregojnë probleme serioze elektrike në shtëpinë tuaj.",
    date: "2025-11-15",
    relatedServices: ["riparime-elektrike"],
    relatedPosts: ["kur-duhet-te-ndryshoni-instalimet-elektrike", "mbrojtja-nga-zjarri-shkaqet-elektrike"],
    content: `
      <p>Problemet elektrike mund të jenë të rrezikshme nëse nuk identifikohen dhe trajtohen në kohë. Ja shenjat kryesore që duhet t'ju alarmojnë.</p>

      <h2>Siguresat bien shpesh</h2>
      <p>Nëse siguresat ose mbrojtësat automatikë bien vazhdimisht, kjo mund të tregojë mbingarkesë të qarkut, lidhje të dobëta ose defekte në pajisje. Mos i rivendosni thjesht — kërkoni ndihmë profesionale.</p>

      <h2>Prizat ose çelësat nxehen</h2>
      <p>Prizat murale nuk duhet të nxehen kurrë. Nëse ndieni nxehtësi kur prekni një prizë ose çelës, kjo tregon problem serioz që kërkon <a href="/sherbimet/riparime-elektrike">ndërhyrje të menjëhershme</a>.</p>

      <h2>Erë djegieje ose tymi</h2>
      <p>Nëse ndieni erë plastike të djegur pranë prizave ose tabelës elektrike, fikeni menjëherë energjinë dhe thirrni një elektricist. Kjo mund të jetë shenjë e <a href="/blog/mbrojtja-nga-zjarri-shkaqet-elektrike">rrezikut të zjarrit</a>.</p>

      <h2>Dritat vezullojnë</h2>
      <p>Vezullimi i herëpashershëm mund të shkaktohet nga llamba të dobëta, por nëse ndodh shpesh ose në disa drita njëkohësisht, problemi mund të jetë në instalimet elektrike.</p>

      <h2>Zhurma nga tabela elektrike</h2>
      <p>Tabela elektrike duhet të funksionojë pa zhurmë. Zhurma si bzz ose klik-klik tregojnë lidhje të dobëta ose komponentë të dëmtuar. Lexoni më shumë rreth <a href="/blog/cfare-eshte-tabela-elektrike-dhe-pse-eshte-e-rendesishme">rëndësisë së tabelës elektrike</a>.</p>

      <h2>Goditje të lehta elektrike</h2>
      <p>Nëse ndieni goditje kur prekni pajisje ose priza, kjo tregon problem me tokëzimin. Kjo është e rrezikshme dhe duhet rregulluar menjëherë.</p>

      <p>Mos prisni derisa problemet të bëhen të rrezikshme. <a href="/kontakt">Na kontaktoni</a> dhe ekipi ynë i <a href="/sherbimet/riparime-elektrike">riparimeve elektrike</a> do t'ju ndihmojë shpejt.</p>
    `,
  },
  {
    slug: "siguria-elektrike-per-femijet",
    title: "Siguria elektrike për fëmijët",
    description: "Udhëzues për prindërit: si ta bëni shtëpinë tuaj të sigurt nga rreziqet elektrike për fëmijët e vegjël.",
    excerpt: "Mbroni fëmijët tuaj nga rreziqet elektrike me këto masa sigurie të thjeshta por të rëndësishme.",
    date: "2025-11-08",
    relatedServices: ["riparime-elektrike"],
    relatedPosts: ["cfare-duhet-te-dini-para-se-te-blini-priza-te-reja", "shenjat-e-problemeve-elektrike-ne-shtepi"],
    content: `
      <p>Fëmijët janë natyrshëm kuriozë dhe kjo i ekspozon ndaj rreziqeve elektrike në shtëpi. Si prindër, është detyrë jonë të krijojmë një ambient të sigurt.</p>

      <h2>Mbuloni prizat e papërdorura</h2>
      <p>Përdorni mbulesa sigurie për prizat që nuk janë në përdorim. Edhe më mirë, instaloni <a href="/blog/cfare-duhet-te-dini-para-se-te-blini-priza-te-reja">priza me mbrojtje integrale për fëmijët</a> që bllokojnë futjen e objekteve.</p>

      <h2>Mbani kabllot larg fëmijëve</h2>
      <p>Organizoni kabllot elektrike duke i fshehur prapa mobilieve ose duke përdorur kanale kabllore. Kabllot e lira janë rrezik dyfishi — elektrik dhe fizik (ngecje).</p>

      <h2>Mësojini fëmijët rreth rreziqeve</h2>
      <p>Nga mosha 3-4 vjeç, filloni t'u mësoni fëmijëve se energjia elektrike është e rrezikshme. Përdorni gjuhë të thjeshtë dhe shembuj të qartë.</p>

      <h2>Kontrolloni pajisjet rregullisht</h2>
      <p>Sigurohuni që të gjitha pajisjet elektrike janë në gjendje të mirë. Kabllot e dëmtuara ose prizat e thyera duhet zëvendësuar menjëherë.</p>

      <h2>Instaloni mbrojtës diferencial (FID)</h2>
      <p>Mbrojtësi diferencial (FID/RCD) shkëput energjinë automatikisht nëse zbulon rrjedhje rryme, duke parandaluar goditjet elektrike. Kjo është masa më e rëndësishme e sigurisë.</p>

      <h2>Zona të lagura</h2>
      <p>Kuzhina dhe banja janë zonat më të rrezikshme. Sigurohuni që prizat janë larg burimeve të ujit dhe që janë të mbrojtura nga lagështira.</p>

      <p>Dëshironi të bëni shtëpinë tuaj më të sigurt për fëmijët? Ekipi ynë i <a href="/sherbimet/riparime-elektrike">riparimeve elektrike</a> mund të instalojë masa sigurie profesionale. <a href="/kontakt">Na kontaktoni</a> sot.</p>
    `,
  },
  {
    slug: "cfare-eshte-tabela-elektrike-dhe-pse-eshte-e-rendesishme",
    title: "Çfarë është tabela elektrike dhe pse është e rëndësishme",
    description: "Gjithçka që duhet të dini rreth tabelës elektrike - funksioni, përbërësit dhe mirëmbajtja e duhur.",
    excerpt: "Tabela elektrike është qendra e sistemit elektrik të shtëpisë suaj. Kuptoni pse duhet t'i kushtoni vëmendjen e duhur.",
    date: "2025-10-30",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["kontrolli-periodik-i-sistemit-elektrik", "shenjat-e-problemeve-elektrike-ne-shtepi"],
    content: `
      <p>Tabela elektrike, e njohur edhe si kutia e siguresave, është elementi qëndror i çdo sistemi elektrik. Ajo shpërndan energjinë në të gjitha qarqet e shtëpisë dhe mbron nga mbingarkesa.</p>

      <h2>Si funksionon tabela elektrike</h2>
      <p>Energjia elektrike hyn në shtëpi nëpërmjet kabllit kryesor dhe arrin tek tabela elektrike. Nga aty, ajo ndahet në qarqe të veçanta — secili me mbrojtësin e vet automatik (siguresa).</p>

      <h2>Përbërësit kryesorë</h2>
      <ul>
        <li><strong>Çelësi kryesor</strong> — fik gjithë energjinë e shtëpisë</li>
        <li><strong>Mbrojtësat automatikë</strong> — mbrojnë çdo qark nga mbingarkesa</li>
        <li><strong>Mbrojtësi diferencial (FID)</strong> — mbron nga rrjedhjet e rrymës</li>
        <li><strong>Shinat e shpërndarjes</strong> — lidhin komponentët mes tyre</li>
      </ul>

      <h2>Shenjat se tabela ka nevojë për ndërhyrje</h2>
      <p>Ka disa <a href="/blog/shenjat-e-problemeve-elektrike-ne-shtepi">shenja paralajmëruese</a> që tregojnë se tabela elektrike ka problem: zhurma, nxehtësia, era e djegur ose mbrojtësat që bien shpesh.</p>

      <h2>Përmirësimi i tabelës</h2>
      <p>Nëse tabela juaj është e vjetër (më shumë se 20 vjet), ka siguresa me tel (jo automatike), ose nuk ka mbrojtës diferencial, duhet ta përmirësoni. Kjo rrit sigurinë dhe mundëson lidhjen e pajisjeve moderne.</p>

      <h2>Planifikimi i tabelës për ndërtesa të reja</h2>
      <p>Për ndërtesa të reja, <a href="/sherbimet/planifikim-elektrik">planifikimi i tabelës elektrike</a> duhet bërë me kujdes duke marrë parasysh të gjitha ngarkesat e parashikuara.</p>

      <p>Keni nevojë për kontroll ose përmirësim të tabelës elektrike? <a href="/kontakt">Na kontaktoni</a> dhe ekipi ynë do t'ju ofrojë <a href="/sherbimet/riparime-elektrike">shërbim profesional</a>.</p>
    `,
  },
  {
    slug: "mbrojtja-nga-zjarri-shkaqet-elektrike",
    title: "Mbrojtja nga zjarri - shkaqet elektrike",
    description: "Mësoni si problemet elektrike mund të shkaktojnë zjarre dhe si të mbroheni me masa parandaluese.",
    excerpt: "Problemet elektrike janë ndër shkaqet kryesore të zjarreve në shtëpi. Mësoni si t'i parandaloni.",
    date: "2025-10-22",
    relatedServices: ["riparime-elektrike"],
    relatedPosts: ["shenjat-e-problemeve-elektrike-ne-shtepi", "kontrolli-periodik-i-sistemit-elektrik"],
    content: `
      <p>Sipas statistikave, problemet elektrike janë ndër shkaqet kryesore të zjarreve në shtëpi. Shumica e tyre mund të parandaloheshin me mirëmbajtje të rregullt dhe vëmendjen e duhur.</p>

      <h2>Shkaqet kryesore elektrike të zjarrit</h2>
      <ul>
        <li><strong>Kabllo të dëmtuara ose të vjetruara</strong> — izolimi i degraduar ekspozon përçuesit</li>
        <li><strong>Mbingarkesa e qarqeve</strong> — lidhja e shumë pajisjeve në një prizë</li>
        <li><strong>Lidhje të dobëta</strong> — krijojnë rezistencë dhe nxehtësi</li>
        <li><strong>Pajisje me defekt</strong> — pajisje me kabllo të dëmtuar ose që nxehen</li>
      </ul>

      <h2>Si të parandaloni zjarret elektrike</h2>
      <p>Hapi i parë është njohja e <a href="/blog/shenjat-e-problemeve-elektrike-ne-shtepi">shenjave të problemeve elektrike</a>. Pastaj:</p>
      <ul>
        <li>Bëni <a href="/blog/kontrolli-periodik-i-sistemit-elektrik">kontroll periodik të sistemit elektrik</a></li>
        <li>Mos mbingarkoni prizat me shumë pajisje</li>
        <li>Zëvendësoni kabllot e dëmtuara menjëherë</li>
        <li>Instaloni mbrojtës diferencial (FID)</li>
        <li>Instaloni detektorë tymi</li>
      </ul>

      <h2>Çfarë të bëni në rast zjarri elektrik</h2>
      <p>Kurrë mos përdorni ujë për të fikur një zjarr elektrik! Fikeni energjinë nga tabela kryesore nëse mundeni, dhe thirrni zjarrfikësit.</p>

      <h2>Roli i elektricistit profesional</h2>
      <p>Një inspektim profesional mund të identifikojë rreziqe që ju nuk i shihni. Ekipi ynë i <a href="/sherbimet/riparime-elektrike">riparimeve elektrike</a> kryen kontrolle të hollësishme sigurie.</p>

      <p>Mos prisni derisa të jetë vonë. <a href="/kontakt">Na kontaktoni</a> sot për një kontroll sigurie të sistemit tuaj elektrik.</p>
    `,
  },
  {
    slug: "kontrolli-periodik-i-sistemit-elektrik",
    title: "Kontrolli periodik i sistemit elektrik",
    description: "Pse kontrolli i rregullt i sistemit elektrik është i domosdoshëm për sigurinë e shtëpisë dhe familjes suaj.",
    excerpt: "Kontrolli periodik i sistemit elektrik parandalon aksidentet dhe zgjat jetën e instalimeve. Mësoni sa shpesh duhet ta bëni.",
    date: "2025-10-15",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["si-te-kurseni-energji-elektrike-ne-shtepi", "kur-duhet-te-ndryshoni-instalimet-elektrike"],
    content: `
      <p>Ashtu si makina juaj ka nevojë për servis të rregullt, edhe sistemi elektrik i shtëpisë kërkon kontroll periodik. Kjo nuk është thjesht këshillë — është çështje sigurie.</p>

      <h2>Pse është i rëndësishëm kontrolli periodik</h2>
      <p>Me kalimin e kohës, instalimet elektrike vjetrohen, lidhjet lirohen dhe komponentët degradohen. Kontrolli periodik identifikon këto probleme para se të bëhen të rrezikshme.</p>

      <h2>Sa shpesh duhet bërë kontrolli</h2>
      <ul>
        <li><strong>Shtëpi banimi:</strong> çdo 5-10 vjet</li>
        <li><strong>Biznese:</strong> çdo 3-5 vjet</li>
        <li><strong>Pas blerjes së shtëpisë:</strong> menjëherë</li>
        <li><strong>Pas çdo rinovimi:</strong> menjëherë</li>
      </ul>

      <h2>Çfarë përfshin kontrolli</h2>
      <p>Një kontroll i plotë përfshin inspektimin e tabelës elektrike, testimin e mbrojtësve automatikë, kontrollin e tokëzimit, matjen e rezistencës së izolimit dhe verifikimin e të gjitha prizave e çelësave.</p>

      <h2>Shenjat që tregojnë nevojë për kontroll urgjent</h2>
      <p>Ka <a href="/blog/shenjat-e-problemeve-elektrike-ne-shtepi">shenja të caktuara</a> që tregojnë se duhet të bëni kontroll menjëherë: siguresat bien shpesh, prizat nxehen, ose <a href="/blog/kur-duhet-te-ndryshoni-instalimet-elektrike">instalimet janë shumë të vjetra</a>.</p>

      <h2>Përfitimet e kontrollit të rregullt</h2>
      <p>Përveç sigurisë, kontrolli periodik <a href="/blog/si-te-kurseni-energji-elektrike-ne-shtepi">ul konsumin e energjisë</a>, zgjat jetën e pajisjeve dhe rrit vlerën e pronës suaj.</p>

      <p>Ekipi i Onerald Electrics ofron shërbim <a href="/sherbimet/riparime-elektrike">kontrolli dhe riparimie profesionale</a>. <a href="/kontakt">Na kontaktoni</a> për të caktuar një takim.</p>
    `,
  },
  {
    slug: "sherbime-elektrike-ne-diber",
    title: "Shërbime elektrike në Dibër",
    description: "Onerald Electrics - elektricist profesional në Dibër. Riparime elektrike, planifikim dhe instalime për shtëpi e biznese.",
    excerpt: "Kërkoni elektricist të besueshëm në Dibër? Onerald Electrics ofron shërbime të plota elektrike në të gjithë rajonin.",
    date: "2025-10-08",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["elektricist-ne-tirane-sherbime-profesionale", "rinovimi-i-sistemit-elektrik-ne-diber-dhe-tirane"],
    content: `
      <p>Dibra ka nevojë për shërbime elektrike të besueshme dhe profesionale. Onerald Electrics, me seli në Dibër, ofron zgjidhje të plota elektrike për banorët dhe bizneset e rajonit.</p>

      <h2>Shërbimet tona në Dibër</h2>
      <p>Ne mbulojmë të gjitha nevojat elektrike të rajonit të Dibrës:</p>
      <ul>
        <li><a href="/sherbimet/riparime-elektrike">Riparime elektrike</a> — diagnostikim dhe riparim i çdo defekti</li>
        <li><a href="/sherbimet/planifikim-elektrik">Planifikim elektrik</a> — projekte për ndërtesa të reja dhe rinovime</li>
        <li>Instalime elektrike të plota</li>
        <li>Mirëmbajtje periodike</li>
        <li>Shërbim urgjent</li>
      </ul>

      <h2>Pse të zgjidhni Onerald Electrics në Dibër</h2>
      <p>Si kompani lokale, ne e njohim mirë rajonin dhe nevojat specifike të banorëve. Avantazhet tona:</p>
      <ul>
        <li>Përgjigje e shpejtë — jemi pranë jush</li>
        <li>Njohje e kushteve lokale</li>
        <li>Çmime konkurruese</li>
        <li>Garanci për punën e kryer</li>
      </ul>

      <h2>Zonat që mbulojmë</h2>
      <p>Ofrojmë shërbime në qytetin e Peshkopisë dhe në të gjitha fshatrat e rrethit të Dibrës, duke përfshirë Maqellarën, Luznien, Muhurrin dhe zona të tjera.</p>

      <h2>Shërbim për biznese</h2>
      <p>Bizneset në Dibër kanë nevojë për sistem elektrik të besueshëm. Ne ofrojmë mirëmbajtje të rregullt, <a href="/blog/rinovimi-i-sistemit-elektrik-ne-diber-dhe-tirane">rinovim të sistemeve të vjetra</a> dhe instalime të reja.</p>

      <p>Jeni në Dibër dhe keni nevojë për elektricist? <a href="/kontakt">Na kontaktoni</a> tani — jemi gjithmonë të gatshëm t'ju ndihmojmë!</p>
    `,
  },
  {
    slug: "elektricist-ne-tirane-sherbime-profesionale",
    title: "Elektricist në Tiranë - shërbime profesionale",
    description: "Onerald Electrics ofron shërbime elektrike profesionale në Tiranë. Riparime, instalime dhe planifikim elektrik.",
    excerpt: "Kërkoni elektricist profesional në Tiranë? Ofrojmë shërbime të plota elektrike me cilësi të lartë.",
    date: "2025-10-01",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["sherbime-elektrike-ne-diber", "rinovimi-i-sistemit-elektrik-ne-diber-dhe-tirane"],
    content: `
      <p>Tirana, si kryeqyteti dhe qyteti më i madh i Shqipërisë, ka nevojë të vazhdueshme për shërbime elektrike profesionale. Onerald Electrics ka zgjeruar aktivitetin e vet për të shërbyer edhe klientët në Tiranë.</p>

      <h2>Shërbimet tona në Tiranë</h2>
      <ul>
        <li><a href="/sherbimet/riparime-elektrike">Riparime elektrike</a> për shtëpi dhe biznese</li>
        <li><a href="/sherbimet/planifikim-elektrik">Planifikim elektrik</a> për ndërtesa të reja</li>
        <li>Instalime elektrike profesionale</li>
        <li>Përmirësim i sistemeve ekzistuese</li>
        <li>Konsulencë teknike</li>
      </ul>

      <h2>Sfidat elektrike në Tiranë</h2>
      <p>Shumë ndërtesa në Tiranë kanë instalime të vjetra që nuk përballojnë kërkesat moderne. Ndërtimet e reja kërkojnë <a href="/blog/planifikimi-elektrik-per-ndertesa-te-reja">planifikim elektrik profesional</a> sipas standardeve aktuale.</p>

      <h2>Shërbim i shpejtë dhe profesional</h2>
      <p>Kuptojmë që koha është e çmueshme, sidomos për bizneset. Prandaj ofrojmë:</p>
      <ul>
        <li>Diagnostikim të shpejtë</li>
        <li>Zgjidhje efikase</li>
        <li>Orar fleksibël</li>
        <li>Çmime transparente</li>
      </ul>

      <h2>Zona që mbulojmë në Tiranë</h2>
      <p>Ofrojmë shërbime në të gjitha lagjet e Tiranës, duke përfshirë Bllokun, Kombinatin, Don Boskën, Laprakën, Kinostudion dhe zona të tjera.</p>

      <p>Për shërbime elektrike profesionale në Tiranë, <a href="/kontakt">na kontaktoni</a>. Ekipi ynë është i gatshëm t'ju ndihmojë me çdo nevojë elektrike.</p>
    `,
  },
  {
    slug: "planifikimi-elektrik-per-ndertesa-te-reja",
    title: "Planifikimi elektrik për ndërtesa të reja",
    description: "Udhëzues i plotë për planifikimin e sistemit elektrik në ndërtesa të reja - çfarë duhet të dini para se të filloni.",
    excerpt: "Planifikimi i mirë elektrik për ndërtesën tuaj të re garanton siguri, efikasitet dhe komoditet për vite me radhë.",
    date: "2025-09-25",
    relatedServices: ["planifikim-elektrik"],
    relatedPosts: ["avantazhet-e-ndricimit-led", "standardet-elektrike-ne-shqiperi"],
    content: `
      <p>Planifikimi elektrik është një nga hapat më të rëndësishëm në ndërtimin e një shtëpie ose ndërtese të re. Një plan i mirë garanton siguri, efikasitet energjitik dhe komoditet.</p>

      <h2>Kur duhet të fillojë planifikimi</h2>
      <p>Planifikimi elektrik duhet të fillojë në fazën e projektimit arkitekturor. Kjo lejon integrimin e plotë të sistemit elektrik me strukturën e ndërtesës.</p>

      <h2>Elementët kryesorë të planit elektrik</h2>
      <ul>
        <li><strong>Skema e qarqeve</strong> — ndarja e sistemit në qarqe të veçanta</li>
        <li><strong>Pozicionimi i prizave</strong> — numri dhe vendndodhja optimale</li>
        <li><strong>Sistemi i ndriçimit</strong> — duke përfshirë <a href="/blog/avantazhet-e-ndricimit-led">ndriçimin LED</a></li>
        <li><strong>Tabela elektrike</strong> — dimensionimi i duhur</li>
        <li><strong>Tokëzimi</strong> — sistemi i sigurisë</li>
      </ul>

      <h2>Llogaritja e ngarkesës</h2>
      <p>Një elektricist profesional llogarit ngarkesën totale të parashikuar duke marrë parasysh të gjitha pajisjet, ndriçimin, ngrohjen/ftohjen dhe ndonjë nevojë të ardhshme.</p>

      <h2>Standardet dhe lejet</h2>
      <p>Çdo projekt elektrik duhet të respektojë <a href="/blog/standardet-elektrike-ne-shqiperi">standardet elektrike në Shqipëri</a>. Projekti duhet miratuar para se të fillojë instalimi.</p>

      <h2>Teknologji moderne</h2>
      <p>Konsideroni integrimin e teknologjive moderne si shtëpia inteligjente (smart home), panelet diellore dhe stacioni i karikimit për makina elektrike.</p>

      <p>Shërbimi ynë i <a href="/sherbimet/planifikim-elektrik">planifikimit elektrik</a> mbulon çdo aspekt të projektit tuaj. <a href="/kontakt">Na kontaktoni</a> për një konsulencë profesionale.</p>
    `,
  },
  {
    slug: "rinovimi-i-sistemit-elektrik-ne-diber-dhe-tirane",
    title: "Rinovimi i sistemit elektrik në Dibër dhe Tiranë",
    description: "Si të rinovoni sistemin elektrik të shtëpisë suaj në Dibër ose Tiranë - procesi, kostot dhe përfitimet.",
    excerpt: "Rinovimi i sistemit elektrik rrit sigurinë dhe vlerën e pronës suaj. Ja çfarë duhet të dini.",
    date: "2025-09-18",
    relatedServices: ["riparime-elektrike", "planifikim-elektrik"],
    relatedPosts: ["sherbime-elektrike-ne-diber", "elektricist-ne-tirane-sherbime-profesionale"],
    content: `
      <p>Rinovimi i sistemit elektrik është një investim i rëndësishëm që rrit sigurinë, efikasitetin dhe vlerën e pronës suaj. Onerald Electrics ofron këtë shërbim në Dibër dhe Tiranë.</p>

      <h2>Kur duhet rinovuar sistemi elektrik</h2>
      <p>Ka disa arsye kryesore për <a href="/blog/kur-duhet-te-ndryshoni-instalimet-elektrike">ndryshimin e instalimeve elektrike</a>:</p>
      <ul>
        <li>Instalimet kanë më shumë se 25 vjet</li>
        <li>Keni blerë shtëpi të vjetër</li>
        <li>Jeni duke bërë rinovim të përgjithshëm</li>
        <li>Sistemi aktual nuk përballon ngarkesën</li>
      </ul>

      <h2>Procesi i rinovimit</h2>
      <p>Rinovimi fillon me një inspektim dhe <a href="/sherbimet/planifikim-elektrik">planifikim të detajuar</a>. Pastaj vazhdon me:</p>
      <ol>
        <li>Heqja e instalimeve të vjetra</li>
        <li>Instalimi i kabllove të reja</li>
        <li>Vendosja e tabelës së re elektrike</li>
        <li>Instalimi i prizave dhe çelësave</li>
        <li>Testimi dhe certifikimi</li>
      </ol>

      <h2>Rinovimi në Dibër</h2>
      <p>Shumë shtëpi në <a href="/blog/sherbime-elektrike-ne-diber">Dibër</a> kanë instalime të vjetra që kërkojnë rinovim. Ne njohim tipologjitë e ndërtesave lokale dhe ofrojmë zgjidhje të përshtatshme.</p>

      <h2>Rinovimi në Tiranë</h2>
      <p>Apartamentet në <a href="/blog/elektricist-ne-tirane-sherbime-profesionale">Tiranë</a>, sidomos ato të ndërtuara para viteve 2000, kanë nevojë urgjente për rinovim elektrik.</p>

      <h2>Kostot dhe financimi</h2>
      <p>Kostoja varet nga madhësia e pronës dhe gjendja e instalimeve. Ne ofrojmë ofertë të detajuar pa detyrime para se të fillojmë punën.</p>

      <p>Gati për të rinovuar sistemin tuaj elektrik? <a href="/kontakt">Na kontaktoni</a> për një vlerësim dhe ofertë nga ekipi ynë i <a href="/sherbimet/riparime-elektrike">specialistëve</a>.</p>
    `,
  },
  {
    slug: "standardet-elektrike-ne-shqiperi",
    title: "Standardet elektrike në Shqipëri",
    description: "Mësoni rreth standardeve dhe rregulloreve elektrike në Shqipëri - çfarë duhet të respektojë çdo instalim elektrik.",
    excerpt: "Njohja e standardeve elektrike në Shqipëri është e rëndësishme për sigurinë dhe ligjshmërinë e instalimeve.",
    date: "2025-09-10",
    relatedServices: ["planifikim-elektrik"],
    relatedPosts: ["si-te-zgjidhni-elektricistin-e-duhur", "planifikimi-elektrik-per-ndertesa-te-reja"],
    content: `
      <p>Standardet elektrike ekzistojnë për të garantuar sigurinë e njerëzve dhe pronave. Në Shqipëri, instalimet elektrike duhet të respektojnë rregulla të caktuara.</p>

      <h2>Kuadri ligjor</h2>
      <p>Shqipëria ka adoptuar standarde evropiane (IEC/EN) për instalimet elektrike. Këto standarde rregullojnë çdo aspekt të instalimeve, nga kabllot deri tek tabelat elektrike.</p>

      <h2>Tensioni dhe frekuenca</h2>
      <p>Në Shqipëri përdoret tensioni 230V me frekuencë 50Hz, sipas standardit evropian. Prizat janë të tipit Schuko (Tip C dhe F).</p>

      <h2>Kërkesat për instalime të reja</h2>
      <ul>
        <li>Mbrojtës diferencial (FID/RCD) i detyrueshëm</li>
        <li>Tokëzim i plotë i sistemit</li>
        <li>Kabllo me seksion të duhur sipas ngarkesës</li>
        <li>Tabela elektrike me mbrojtësa automatikë</li>
        <li>Ndarje e qarqeve sipas funksionit</li>
      </ul>

      <h2>Certifikimi i instalimeve</h2>
      <p>Pas përfundimit të instalimit, sistemi duhet testuar dhe certifikuar nga një profesionist i liçencuar. Kjo garanton që gjithçka është sipas standardeve.</p>

      <h2>Rëndësia e respektimit të standardeve</h2>
      <p>Instalimet jo sipas standardeve janë të rrezikshme dhe të paligjshme. Ato mund të shkaktojnë aksidente, zjarre dhe probleme me sigurimin e pronës.</p>

      <h2>Zgjedhja e profesionistit të duhur</h2>
      <p>Sigurohuni që <a href="/blog/si-te-zgjidhni-elektricistin-e-duhur">elektricisti që zgjidhni</a> njeh dhe respekton standardet. Shërbimi ynë i <a href="/sherbimet/planifikim-elektrik">planifikimit elektrik</a> garanton respektimin e plotë të të gjitha standardeve.</p>

      <p>Keni pyetje rreth standardeve elektrike? <a href="/kontakt">Na kontaktoni</a> për konsulencë profesionale.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((post) => slugs.includes(post.slug));
}
