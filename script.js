// =====================================================
// DREAM LAND MOTEL RWANDA
// MAIN JAVASCRIPT
// LANGUAGE SYSTEM + MOBILE MENU + SITE FUNCTIONS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // LANGUAGE SYSTEM
    // =====================================================

    const supportedLanguages = ["en", "rw"];
    const defaultLanguage = "en";
    const languageStorageKey = "dreamLandLanguage";

    let currentLanguage =
        localStorage.getItem(languageStorageKey) || defaultLanguage;

    if (!supportedLanguages.includes(currentLanguage)) {
        currentLanguage = defaultLanguage;
    }


    // =====================================================
    // TRANSLATIONS
    // =====================================================

    const translations = {

        // =================================================
        // ENGLISH
        // =================================================

        en: {

            // -------------------------------------------------
            // NAVIGATION
            // -------------------------------------------------

            navHome: "Home",
            navMenu: "Menu",
            navAbout: "About Us",

            home: "Home",
            menu: "Menu",
            about: "About Us",

            payUs: "Pay Us",
            contact: "Contact",
            language: "Kinyarwanda",

            // -------------------------------------------------
            // HOME PAGE
            // -------------------------------------------------

            heroWelcome: "WELCOME TO",

            heroText:
                "A comfortable place to stay, dine, relax and enjoy memorable moments in Kigali.",

            viewMenu:
                "View Our Menu",

            orderNow:
                "Order Now",

            bookNow:
                "Book Now",

            bookSpace:
                "Book a Space",

            dreamLandExperience:
                "DREAM LAND EXPERIENCE",

            moreThanStay:
                "More Than Just A Stay",

            introText:
                "Dream Land Motel offers comfortable accommodation, delicious food, refreshing drinks and relaxing services in a welcoming environment.",

            whatWeOffer:
                "WHAT WE OFFER",

            ourServices:
                "Our Services",

            servicesIntro:
                "Everything you need for a comfortable and enjoyable experience.",

            comfortableRooms:
                "Comfortable Rooms",

            comfortableRoomsText:
                "Clean, comfortable and affordable rooms for a relaxing stay.",

            restaurant:
                "Restaurant",

            restaurantText:
                "Enjoy delicious meals prepared with care in a comfortable environment.",

            sauna:
                "Sauna",

            saunaText:
                "Relax and refresh your body with our sauna experience.",

            massage:
                "Massage",

            massageText:
                "Take time to relax and enjoy a professional massage experience.",

            bar:
                "Bar",

            barText:
                "Enjoy drinks and a relaxing atmosphere with friends and family.",

            events:
                "Events, Meetings & Parties",

            eventsText:
                "A convenient place for parties, celebrations, meetings and special events.",

            billiard:
                "Billiard",

            billiardText:
                "Have fun and enjoy exciting billiard games in a friendly atmosphere.",

            welcomeDreamLand:
                "WELCOME TO DREAM LAND",

            comfortPriority:
                "Your Comfort Is Our Priority",

            finalMessage:
                "We look forward to welcoming you at Dream Land Motel and giving you an experience worth remembering.",

            // -------------------------------------------------
            // LOCATIONS / SOCIAL
            // -------------------------------------------------

            findUs:
                "FIND US",

            ourLocations:
                "Our Locations",

            branch01:
                "BRANCH 01",

            branch02:
                "BRANCH 02",

            kabuga:
                "Kabuga",

            kabugaMotel:
                "Dream Land Motel Kabuga",

            bisenga:
                "Bisenga",

            bisengaMotel:
                "Dream Land Motel Bisenga",

            viewGoogleMaps:
                "View on Google Maps",

            followUs:
                "FOLLOW US",

            facebook:
                "Facebook",

            instagram:
                "Instagram",

            tiktok:
                "TikTok",

            quickContact:
                "QUICK CONTACT",

            callKabuga:
                "Call Dream Land Motel Kabuga",

            whatsappKabuga:
                "WhatsApp Dream Land Motel Kabuga",

            footerTagline:
                "Comfort • Food • Relaxation • Hospitality",

            allRights:
                "All rights reserved.",

            // =================================================
            // MENU PAGE
            // =================================================

            welcomeTo:
                "WELCOME TO",

            goodFoodFineDrinks:
                "Good Food • Fine Drinks • Great Moments",

            viewOurMenu:
                "VIEW OUR MENU",

            dreamLandMotel:
                "DREAM LAND MOTEL",

            placeToEatRelax:
                "A Place to Eat,<br>Relax & Enjoy",

            introMenuText:
                "Welcome to Dream Land Motel. Enjoy delicious food, refreshing drinks and unforgettable moments in a warm and relaxing atmosphere.",

            ourSelection:
                "OUR SELECTION",

            ourMenu:
                "Our Menu",

            chooseFavourite:
                "Choose your favourite food and drinks.",

            food:
                "FOOD",

            ourFood:
                "Our Food",

            chickenMeat:
                "Chicken & Meat",

            juices:
                "Juices",

            teaCoffee:
                "Tea & Coffee",

            nonAlcoholicShort:
                "NON-ALCOHOLIC",

            nonAlcoholic:
                "Non-Alcoholic Drinks",

            alcoholicShort:
                "ALCOHOLIC",

            alcoholic:
                "Alcoholic Drinks",

            beersBottled:
                "Beers & Bottled Drinks",

            winesSpirits:
                "Wines & Spirits",

            measurePrice25000:
                "Measure 25,000 Rwf",

            measurePrice20000:
                "Measure 20,000 Rwf",

            comingSoon:
                "COMING SOON",

            moreDrinks:
                "More Drinks",

            newProductsNote:
                "New products are being prepared. Prices will be added after confirmation.",

            easyPayment:
                "EASY PAYMENT",

            tapToPay:
                "Tap to Pay",

            getInTouch:
                "GET IN TOUCH",

            callWhatsApp:
                "Call & WhatsApp Us",

            tapNumber:
                "Tap a number to call or contact us on WhatsApp.",

            call:
                "Call",

            whatsapp:
                "WhatsApp",

            thankYou:
                "Thank You",

            thankYouText:
                "Thank you for choosing Dream Land. We are delighted to welcome you. Enjoy our food, drinks and warm hospitality. We look forward to welcoming you again.",

            // =================================================
            // ABOUT US PAGE
            // =================================================

            aboutOurStory:
                "OUR STORY",

            aboutHeroTitle:
                "About <span>Dream Land</span>",

            aboutHeroText:
                "More than a place to stay, Dream Land Motel is growing into a destination where hospitality, comfort, nature and memorable experiences come together.",

            whoWeAre:
                "WHO WE ARE",

            aboutIntroTitle:
                "A Dream That Began in Kabuga",

            aboutIntroLead:
                "Dream Land Motel Kigali first opened its doors in <strong>2020</strong> in Kabuga.",

            aboutIntroText1:
                "From the beginning, our purpose has been simple: to create a welcoming place where guests can stay, dine, relax and enjoy genuine hospitality.",

            aboutIntroText2:
                "Today, Dream Land continues to grow with the same commitment to comfort, quality service and the satisfaction of every guest who walks through our doors.",

            dreamLandToday:
                "DREAM LAND TODAY",

            builtPeoplePurpose:
                "Built on People & Purpose",

            factsIntro:
                "Our progress is built around our guests, our team and the vision that guides our future.",

            foundedKabuga:
                "Founded in Kabuga",

            locations:
                "Locations",

            rooms:
                "Rooms",

            permanentEmployees:
                "Permanent Employees",

            ourJourney:
                "OUR JOURNEY",

            journeyTitle:
                "From One Dream to a Growing Destination",

            journeyIntro:
                "Every step has brought us closer to the Dream Land we are building for the future.",

            beginningTitle:
                "The Beginning",

            beginningText:
                "Dream Land Motel opened its first branch in Kabuga, beginning its journey in hospitality with a focus on welcoming guests and providing comfortable stays.",

            bisengaExpansionTitle:
                "Bisenga Expansion",

            bisengaExpansionText:
                "Four years later, Dream Land opened its second branch in Bisenga, expanding its presence and bringing the Dream Land experience to more guests.",

            visionAheadTitle:
                "The Vision Ahead",

            visionAheadText:
                "Our journey continues toward 2035, with plans to expand our facilities, strengthen our services and create a richer experience for our guests.",

            leadership:
                "LEADERSHIP",

            ceo:
                "Chief Executive Officer",

            leadershipText:
                "Under the leadership of CEO Geraridine NYIRAHABIMANA, Dream Land continues to pursue sustainable growth while keeping hospitality, service and guest satisfaction at the heart of its journey.",

            trustConfidence:
                "TRUST & CONFIDENCE",

            registeredRdb:
                "Registered with RDB",

            registeredRdbText:
                "Dream Land Motel is a registered business in Rwanda and operates in accordance with the requirements of the Rwanda Development Board (RDB).",

            rdbCertificate:
                "RDB Registration Certificate",

            rdbCertificateText:
                "Dream Land Motel is officially registered as a business in Rwanda.",

            ourVision2035:
                "OUR VISION TO 2035",

            growingDream:
                "Growing the <span>Dream</span>",

            visionText1:
                "Our ambition is to continuously expand Dream Land according to the direction we have set through 2035.",

            visionText2:
                "We envision a destination that offers much more than accommodation — a place where families, travellers and guests can relax, connect, explore and create lasting memories.",

            visionText3:
                "Our future plans include new facilities, recreational spaces and experiences designed for families, children and all our guests.",

            swimmingPool:
                "Swimming Pool",

            swimmingPoolText:
                "A beautiful swimming pool where guests and families can relax, enjoy the water and create memorable moments.",

            childrenPlayground:
                "Children's Playground",

            childrenPlaygroundText:
                "Dedicated playground facilities where children can play, explore and enjoy themselves in a safe and welcoming environment.",

            childrenGames:
                "Children's Games & Entertainment",

            childrenGamesText:
                "Fun games and entertainment activities designed to give children enjoyable experiences while families spend time together.",

            freshFruitGardens:
                "Fresh Fruit Gardens",

            freshFruitGardensText:
                "Guests will have the opportunity to explore our gardens and enjoy fresh, authentic fruit directly from the trees.",

            fishingExperience:
                "Fishing Experience",

            fishingExperienceText:
                "A relaxing fishing experience where guests can enjoy nature and discover a different way of spending time at Dream Land.",

            familyNature:
                "Family & Nature Experience",

            familyNatureText:
                "A peaceful environment where families can connect, relax, explore nature and create lasting memories together.",

            dreamLandExperienceTitle:
                "THE DREAM LAND EXPERIENCE",

            hospitalityNature:
                "Hospitality Meets Nature",

            experienceIntro:
                "We want to bring our guests closer to an authentic experience — where a stay can become a discovery.",

            freshFromGardens:
                "Fresh From Our Gardens",

            freshFromGardensText:
                "We envision giving guests the opportunity to walk through our gardens and pick fresh, authentic fruit directly from the trees.",

            fishingExperience2:
                "Fishing Experience",

            fishingExperienceText2:
                "Our vision includes creating an experience where guests can fish and enjoy fresh fish from our own environment.",

            genuineConnection:
                "A Genuine Connection",

            genuineConnectionText:
                "We want guests to experience where their food comes from while enjoying the comfort, hospitality and peaceful atmosphere of Dream Land.",

            welcomeDreamLandKigali:
                "WELCOME TO DREAM LAND MOTEL KIGALI",

            comeRelaxDiscover:
                "Come. Relax. Discover.",

            finalAboutText:
                "From our beginning in Kabuga in 2020 to our second location in Bisenga and our vision for 2035, the Dream Land journey is only getting started.",

            allRightsAbout:
                "© 2026 Dream Land Motel Kigali. All Rights Reserved.",

            submit:
                "Submit",

            continue:
                "Continue",

            cancel:
                "Cancel",

            back:
                "Back",

            phone:
                "Phone",

            openingHours:
                "Opening Hours",

            available:
                "Available 24/7"
        },


        // =================================================
        // KINYARWANDA
        // =================================================

        rw: {

            // -------------------------------------------------
            // NAVIGATION
            // -------------------------------------------------

            navHome:
                "Ahabanza",

            navMenu:
                "Menu",

            navAbout:
                "Abo Turi Bo",

            home:
                "Ahabanza",

            menu:
                "Menu",

            about:
                "Abo turibo",

            payUs:
                "Kwishyura",

            contact:
                "Twandikire",

            language:
                "English",

            // =================================================
            // HOME PAGE
            // =================================================

            heroWelcome:
                "MURAKAZA KURI",

            heroText:
                "Ahantu heza ho gucumbika, gusangira amafunguro, kuruhukira no kugira ibihe byiza bitazibagirana i Kigali.",

            viewMenu:
                "Reba Menu Yacu",

            orderNow:
                "Tumiza nonaha",

            bookNow:
                "Bika icyumba",

            bookSpace:
                "Bika sale",

            dreamLandExperience:
                "UBUNARARIBONYE BWA DREAM LAND",

            moreThanStay:
                "TURENZE GUCUMBIKA GUSA",

            introText:
                "Dream Land Motel itanga amacumbi meza, amafunguro aryoshye, ibinyobwa bisusurutsa na serivisi zo kuruhuka, ahantu hakira abantu kandi hatuje.",

            whatWeOffer:
                "IBYO DUTANGA",

            ourServices:
                "SERIVISI ZACU",

            servicesIntro:
                "Ibyo ukeneye byose kugira ngo ugire ubunararibonye bwiza kandi bushimishije.",

            comfortableRooms:
                "Amacumbi Meza",

            comfortableRoomsText:
                "Amacumbi asukuye, meza kandi ahendutse, yagenewe kugufasha kuruhuka neza.",

            restaurant:
                "Restaurant",

            restaurantText:
                "Ishimire amafunguro aryoshye ateguranywe ubwitonzi, ahantu heza kandi hatuje.",

            sauna:
                "Sauna",

            saunaText:
                "Ruhuka kandi uvugurure umubiri ukoresheje serivisi ya Sauna.",

            massage:
                "Massage",

            massageText:
                "Fata umwanya wo kuruhuka no kwishimira massage ikorwa n'ababifitemo ubuhanga.",

            bar:
                "Bar",

            barText:
                "Ishimire ibinyobwa n'ahantu hatuje uri kumwe n'inshuti cyangwa umuryango.",

            events:
                "Ibirori, Inama n'Ibikorwa Bidasanzwe",

            eventsText:
                "Ahantu heza ho gukorera ibirori, iminsi mikuru, inama n'ibindi bikorwa bidasanzwe.",

            billiard:
                "Billiard",

            billiardText:
                "Gira ibihe bishimishije ukine Billiard hamwe n'inshuti.",

            welcomeDreamLand:
                "MURAKAZA NEZA KURI DREAM LAND",

            comfortPriority:
                "Ituze ry'abakiriya niryo dushyira imbere",

            finalMessage:
                "Twishimiye kukwakira kuri Dream Land Motel no kuguha ubunararibonye bwiza uzahora wibuka.",

            // =================================================
            // LOCATIONS / SOCIAL
            // =================================================

            findUs:
                "AHO TUBARIZWA",

            ourLocations:
                "AMASHAMI YACU",

            branch01:
                "ISHAMI RYA 01",

            branch02:
                "ISHAMI RYA 02",

            kabuga:
                "Kabuga",

            kabugaMotel:
                "Dream Land Motel Kabuga",

            bisenga:
                "Bisenga",

            bisengaMotel:
                "Dream Land Motel Bisenga",

            viewGoogleMaps:
                "Reba Aho Turi kuri Google Maps",

            followUs:
                "DUKURIKIRE",

            facebook:
                "Facebook",

            instagram:
                "Instagram",

            tiktok:
                "TikTok",

            quickContact:
                "KUTWANDIKIRA VUBA",

            callKabuga:
                "Hamagara Dream Land Motel Kabuga",

            whatsappKabuga:
                "Andikira Dream Land Motel Kabuga kuri WhatsApp",

            footerTagline:
                "Ituze • Amafunguro • Kuruhuka • Kwakirwa neza",

            allRights:
                "Uburenganzira bwose burubahirizwa.",

            // =================================================
            // MENU PAGE
            // =================================================

            welcomeTo:
                "MURAKAZA NEZA KURI",

            goodFoodFineDrinks:
                "Amafunguro Meza • Ibinyobwa Byiza • Ibihe Byiza",

            viewOurMenu:
                "REBA MENU YACU",

            dreamLandMotel:
                "DREAM LAND MOTEL",

            placeToEatRelax:
                "Aho Gusangirira,<br>Kuruhukira no Kwishimisha",

            introMenuText:
                "Murakaza neza kuri Dream Land Motel. Ishimire amafunguro aryoshye, ibinyobwa bisusurutsa n'ibihe byiza bitazibagirana ahantu hafutse kandi hatuje.",

            ourSelection:
                "IBYO WAHITAMO",

            ourMenu:
                "Menu Yacu",

            chooseFavourite:
                "Hitamo amafunguro n'ibinyobwa ukunda.",

            food:
                "AMAFUNGURO",

            ourFood:
                "Amafunguro Yacu",

            chickenMeat:
                "Inkoko n'Inyama",

            juices:
                "Imitobe",

            teaCoffee:
                "Icyayi n'Ikawa",

            nonAlcoholicShort:
                "IBIDASEMBUYE",

            nonAlcoholic:
                "Ibinyobwa Bidafite umusemburo",

            alcoholicShort:
                "IBINYOBWA BISEMBUYE",

            alcoholic:
                "Ibinyobwa Bisembuye",

            beersBottled:
                "Beer n'Ibinyobwa byo mu Macupa",

            winesSpirits:
                "Divayi n'Ibinyobwa Bisembuye",

            measurePrice25000:
                "Measure ya 25,000 Rwf",

            measurePrice20000:
                "Measure ya 20,000 Rwf",

            comingSoon:
                "BIRAZA VUBA",

            moreDrinks:
                "Ibindi Binobwa",

            newProductsNote:
                "Ibicuruzwa bishya birategurwa. Ibiciro bizashyirwaho bimaze kwemezwa.",

            easyPayment:
                "KWISHYURA BYOROSHYE",

            tapToPay:
                "Kanda Wishyure",

            getInTouch:
                "TWANDIKIRE",

            callWhatsApp:
                "Hamagara cyangwa Utwandikire kuri WhatsApp",

            tapNumber:
                "Kanda kuri nimero kugira ngo uhamagare cyangwa utwandikire kuri WhatsApp.",

            call:
                "Hamagara",

            whatsapp:
                "WhatsApp",

            thankYou:
                "Murakoze",

            thankYouText:
                "Murakoze guhitamo Dream Land. Twishimiye kubakira. Ishimire amafunguro yacu, ibinyobwa no kwakirwa neza. TURABATEGEREJE.",

            // =================================================
            // ABOUT US PAGE
            // =================================================

            aboutOurStory:
                "INKURU YACU",

            aboutHeroTitle:
                "Ibyerekeye <span>Dream Land</span>",

            aboutHeroText:
                "Dream Land Motel si ahantu ho gucumbika gusa. Turagenda twaguka, tugamije kuba ahantu harangwa n'ubwakirizi bwiza, ihumure, ibidukikije n'ibihe byiza bitazibagirana.",

            whoWeAre:
                "ABO TURI BO",

            aboutIntroTitle:
                "Inzozi Zatangiriye i Kabuga",

            aboutIntroLead:
                "Dream Land Motel Kigali yafunguye imiryango bwa mbere mu <strong>2020</strong> i Kabuga.",

            aboutIntroText1:
                "Kuva mu ntangiriro, intego yacu yabaye iyo kurema ahantu hakira abantu neza, aho abashyitsi bashobora gucumbika, gusangirira, kuruhukira no kwishimira serivisi nziza.",

            aboutIntroText2:
                "Uyu munsi, Dream Land ikomeje gutera imbere, ishingiye ku ituze, serivisi nziza no kunyurwa kwa buri mushyitsi utugana.",

            dreamLandToday:
                "DREAM LAND UYU MUNSI",

            builtPeoplePurpose:
                "Twubakiye ku Bantu n'Intego",

            factsIntro:
                "Iterambere ryacu rishingiye ku bashyitsi bacu, abakozi bacu n'icyerekezo dufite cy'ejo hazaza.",

            foundedKabuga:
                "Yatangiriye i Kabuga",

            locations:
                "Amashami",

            rooms:
                "Amacumbi",

            permanentEmployees:
                "Abakozi Bahoraho",

            ourJourney:
                "URUGENDO RWACU",

            journeyTitle:
                "Kuva ku Nzozi Tugana ku Kigo rutura kandi gishingiye kubatugana",

            journeyIntro:
                "Buri ntambwe yadufashije kwegera aho  twifuza kubaka mu gihe kizaza.",

            beginningTitle:
                "Intangiriro",

            beginningText:
                "Dream Land Motel yafunguye ishami ryayo rya mbere i Kabuga, itangira urugendo mu rwego rw'ubwakirizi, yibanda ku kwakira abashyitsi neza no kubaha amacumbi meza.",

            bisengaExpansionTitle:
                "Kwaguka Bisenga",

            bisengaExpansionText:
                "Nyuma y'imyaka ine, Dream Land yafunguye ishami rya kabiri  Bisenga, yagura ibikorwa byayo kandi igeza ubunararibonye bwa Dream Land ku bashyitsi benshi.",

            visionAheadTitle:
                "Icyerekezo cy'Ejo Hazaza",

            visionAheadText:
                "Urugendo rwacu rukomeje kugana muri 2035, dufite gahunda yo kwagura ibikorwa, kunoza serivisi no kurushaho kunoza ubunararibonye bw'abashyitsi bacu.",

            leadership:
                "UBUYOBOZI",

            ceo:
                "Umuyobozi Mukuru",

            leadershipText:
                "Binyuze kuri CEO Geraridine NYIRAHABIMANA, Dream Land ikomeje gukurana gahunda y'iterambere rirambye, ishyira ubwakirizi, serivisi nziza no kunyurwa kw'abashyitsi ku isonga.",

            trustConfidence:
                "ICYIZERE N'UBWIZERANE",

            registeredRdb:
                "Yanditswe muri RDB",

            registeredRdbText:
                "Dream Land Motel ni ikigo cyanditswe mu Rwanda kandi gikora hakurikijwe ibisabwa n'Ikigo cy'Igihugu gishinzwe Iterambere (Rwanda Development Board - RDB).",

            rdbCertificate:
                "Icyemezo cyo Kwiyandikisha muri RDB",

            rdbCertificateText:
                "Dream Land Motel yanditswe ku mugaragaro nk'ubucuruzi mu Rwanda.",

            ourVision2035:
                "ICYEREKEZO CYACU CYA 2035",

            growingDream:
                "Gukuza <span>Inzozi</span>",

            visionText1:
                "Intego yacu ni ugukomeza kwagura Dream Land dukurikije icyerekezo twihaye kugeza mu 2035.",

            visionText2:
                "Twifuza ko hazaba ahantu hatanga byinshi birenze amacumbi — ahantu imiryango, abagenzi n'abashyitsi bashobora kuruhuka, gusabana, gutembera no kugira ibihe byiza byo kwibuka.",

            visionText3:
                "Gahunda zacu z'ahazaza zirimo inyubako n'ibikorwa bishya, ahantu ho kwidagadurira ndetse n'ubunararibonye bugenewe imiryango, abana n'abashyitsi bacu bose.",

            swimmingPool:
                "Piscine",

            swimmingPoolText:
                "Piscine nziza aho abashyitsi n'imiryango bashobora kuruhukira, koga no kugira ibihe byiza bitazibagirana.",

            childrenPlayground:
                "Ahakinirwa Abana",

            childrenPlaygroundText:
                "Ahantu hihariye hagenewe abana gukina, gutembera no kwishimisha ahantu hizewe kandi hakira abantu.",

            childrenGames:
                "Imikino n'Imyidagaduro by'Abana",

            childrenGamesText:
                "Imikino n'imyidagaduro bizafasha abana kwishimana, mu gihe imiryango yabo imarana na bo igihe cyiza.",

            freshFruitGardens:
                "Imirima y'Imbuto Nshya",

            freshFruitGardensText:
                "Abashyitsi bazabona amahirwe yo gutembera mu mirima yacu no kwishimira imbuto nshya kandi karemano, bazitorera ku biti.",

            fishingExperience:
                "Ubunararibonye bwo Kuroba",

            fishingExperienceText:
                "Ahantu hatuje ho kuroba, aho abashyitsi bashobora kwishimira ibidukikije no kubona ubundi buryo bwo kumara igihe kuri Dream Land.",

            familyNature:
                "Umuryango n'Ibidukikije",

            familyNatureText:
                "Ahantu hatuje aho imiryango ishobora gusabana, kuruhuka, gutembera mu bidukikije no kurema ibihe byiza byo kwibuka.",

            dreamLandExperienceTitle:
                "UBUNARARIBONYE BWA DREAM LAND",

            hospitalityNature:
                "Ubwakirizi Buhuza n'Ibidukikije",

            experienceIntro:
                "Twifuza guha abashyitsi bacu ubunararibonye bwihariye — aho gucumbika bishobora guhinduka amahirwe yo kuvumbura no kwishimira ibidukikije.",

            freshFromGardens:
                "Imbuto Zituruka mu Mirima Yacu",

            freshFromGardensText:
                "Twifuza guha abashyitsi amahirwe yo gutembera mu mirima yacu no kwisoromera  imbuto nshya kandi karemano ku biti.",

            fishingExperience2:
                "Ubunararibonye bwo Kuroba",

            fishingExperienceText2:
                "Icyerekezo cyacu kirimo kurema ahantu abashyitsi bashobora kuroba no kwishimira amafi mashya aturuka mu bidukikije byacu.",

            genuineConnection:
                "Kumenya Aho Ibyo Turya Bituruka",

            genuineConnectionText:
                "Twifuza ko abashyitsi bamenya aho amafunguro yabo aturuka, mu gihe bishimira ihumure, ubwakirizi n'umutuzo bya Dream Land.",

            welcomeDreamLandKigali:
                "MURAKAZA KURI DREAM LAND MOTEL KIGALI",

            comeRelaxDiscover:
                "Ngwino. Ruhuka. Vumbura.",

            finalAboutText:
                "Kuva ku ntangiriro zacu i Kabuga mu 2020, kugeza ku ishami rya kabiri Bisenga n'icyerekezo cyacu cya 2035, urugendo rwa Dream Land rukomeje gutera imbere.",

            allRightsAbout:
                "© 2026 Dream Land Motel Kigali. Uburenganzira Bwose Burabitswe.",

            submit:
                "Ohereza",

            continue:
                "Komeza",

            cancel:
                "Hagarika",

            back:
                "Subira Inyuma",

            phone:
                "Telefone",

            openingHours:
                "Amasaha Dukoreramo",

            available:
                "Dukora amasaha 24/7"
        }
    };


    // =====================================================
    // TRANSLATION FUNCTION
    // =====================================================

    function translatePage() {

        document.documentElement.lang =
            currentLanguage;


        const elements =
            document.querySelectorAll(
                "[data-translate]"
            );


        elements.forEach(element => {

            const key =
                element.getAttribute(
                    "data-translate"
                );


            const translatedText =
                translations[currentLanguage]?.[key];


            if (translatedText !== undefined) {

                element.innerHTML =
                    translatedText;
            }
        });


        // -------------------------------------------------
        // PLACEHOLDERS
        // -------------------------------------------------

        const placeholderElements =
            document.querySelectorAll(
                "[data-translate-placeholder]"
            );


        placeholderElements.forEach(element => {

            const key =
                element.getAttribute(
                    "data-translate-placeholder"
                );


            const translatedText =
                translations[currentLanguage]?.[key];


            if (translatedText !== undefined) {

                element.placeholder =
                    translatedText;
            }
        });


        // -------------------------------------------------
        // TITLE ATTRIBUTES
        // -------------------------------------------------

        const titleElements =
            document.querySelectorAll(
                "[data-translate-title]"
            );


        titleElements.forEach(element => {

            const key =
                element.getAttribute(
                    "data-translate-title"
                );


            const translatedText =
                translations[currentLanguage]?.[key];


            if (translatedText !== undefined) {

                element.title =
                    translatedText;
            }
        });


        // -------------------------------------------------
        // LANGUAGE BUTTON
        // -------------------------------------------------

        const languageButtons =
            document.querySelectorAll(
                "#languageToggle"
            );


        languageButtons.forEach(button => {

            button.textContent =
                currentLanguage === "en"
                    ? "Kinyarwanda"
                    : "English";


            button.setAttribute(
                "aria-label",
                currentLanguage === "en"
                    ? "Switch to Kinyarwanda"
                    : "Switch to English"
            );


            button.setAttribute(
                "title",
                currentLanguage === "en"
                    ? "Hindura ururimi ujye mu Kinyarwanda"
                    : "Switch language to English"
            );
        });
    }


    // =====================================================
    // LANGUAGE BUTTON POSITION
    // ALWAYS OUTSIDE HAMBURGER / NAV LINKS
    // =====================================================

    const languageButton =
        document.getElementById(
            "languageToggle"
        );


    const menuToggleForLanguage =
        document.getElementById(
            "menuToggle"
        );


    const navLinksForLanguage =
        document.getElementById(
            "navLinks"
        );


    if (
        languageButton &&
        menuToggleForLanguage &&
        navLinksForLanguage &&
        navLinksForLanguage.contains(languageButton)
    ) {

        const navbarContainer =
            menuToggleForLanguage.parentElement;


        if (navbarContainer) {

            navbarContainer.insertBefore(
                languageButton,
                menuToggleForLanguage
            );
        }
    }


    // =====================================================
    // LANGUAGE TOGGLE
    // =====================================================

    const languageButtons =
        document.querySelectorAll(
            "#languageToggle"
        );


    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();


                currentLanguage =
                    currentLanguage === "en"
                        ? "rw"
                        : "en";


                localStorage.setItem(
                    languageStorageKey,
                    currentLanguage
                );


                translatePage();
            }
        );
    });


    translatePage();


    // =====================================================
    // PAGE LOADER
    // =====================================================

    const pageLoader =
        document.getElementById(
            "page-loader"
        );


    if (pageLoader) {

        window.addEventListener(
            "load",
            () => {

                setTimeout(() => {

                    pageLoader.classList.add(
                        "hide"
                    );

                }, 700);
            }
        );
    }


    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (menuToggle && navLinks) {

        const hamburgerIcon = `
            <span
                class="hamburger-lines"
                aria-hidden="true"
            >
                <span></span>
                <span></span>
                <span></span>
            </span>
        `;


        const closeIcon = `
            <span
                class="close-icon"
                aria-hidden="true"
            ></span>
        `;


        function setMenuState(open) {

            navLinks.classList.toggle(
                "open",
                open
            );


            menuToggle.setAttribute(
                "aria-expanded",
                String(open)
            );


            menuToggle.innerHTML =
                open
                    ? closeIcon
                    : hamburgerIcon;
        }


        // Start closed
        setMenuState(false);


        // -------------------------------------------------
        // HAMBURGER BUTTON
        // -------------------------------------------------

        menuToggle.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    navLinks.classList.contains(
                        "open"
                    );


                setMenuState(
                    !isOpen
                );
            }
        );


        // -------------------------------------------------
        // CLOSE WHEN NAV LINK IS CLICKED
        // -------------------------------------------------

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        setMenuState(false);
                    }
                );
            });


        // -------------------------------------------------
        // CLOSE WHEN CLICKING OUTSIDE
        // -------------------------------------------------

        document.addEventListener(
            "click",
            event => {

                if (
                    !navLinks.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    setMenuState(false);
                }
            }
        );


        // -------------------------------------------------
        // ESCAPE KEY
        // -------------------------------------------------

        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    setMenuState(false);
                }
            }
        );


        // -------------------------------------------------
        // CLOSE ON DESKTOP
        // -------------------------------------------------

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 700) {

                    setMenuState(false);
                }
            }
        );
    }


    // =====================================================
    // REVEAL ANIMATION
    // =====================================================

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );
            }
        );
    }


    // =====================================================
    // SERVICE IMAGE TRANSITION DELAYS
    // =====================================================

    const serviceImages =
        document.querySelectorAll(
            ".service-image img"
        );


    serviceImages.forEach(
        (image, index) => {

            image.style.transitionDelay =
                `${index * 80}ms`;
        }
    );


    // =====================================================
    // STATIC HERO IMAGE
    // NO SLIDESHOW
    // =====================================================

    const heroSection =
        document.querySelector(
            ".hero"
        );


    if (heroSection) {

        heroSection.style.setProperty(
            "--hero-slide-image",
            'url("hero2.jpg")'
        );
    }


    // =====================================================
    // NAVBAR SCROLL EFFECT
    // =====================================================

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (navbar) {

        const updateNavbar =
            () => {

                if (window.scrollY > 50) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );
                }
            };


        updateNavbar();


        window.addEventListener(
            "scroll",
            updateNavbar,
            {
                passive: true
            }
        );
    }


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {

                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    }
                );
            }
        );


    // =====================================================
    // ACTIVE NAVIGATION
    // =====================================================

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    document
        .querySelectorAll(
            ".nav-links a"
        )
        .forEach(
            link => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (!href) return;


                const linkPage =
                    href
                        .split("#")[0]
                        .split("/")
                        .pop();


                if (
                    linkPage === currentPage ||
                    (
                        currentPage === "" &&
                        linkPage === "index.html"
                    )
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );


    // =====================================================
    // DISABLE EMPTY HASH LINKS
    // =====================================================

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();
                    }
                );
            }
        );


    // =====================================================
    // BOOK A SPACE SYSTEM
    // =====================================================

    const spaceBookingForm =
        document.getElementById(
            "spaceBookingForm"
        );


    if (spaceBookingForm) {

        // -------------------------------------------------
        // CONTACT
        // -------------------------------------------------

        const kabugaPhone =
            "0788356146";

        const kabugaWhatsApp =
            "250788356146";


        // -------------------------------------------------
        // FLOATING CONTACT
        // -------------------------------------------------

        const floatingWhatsApp =
            document.querySelector(
                ".floating-whatsapp"
            );


        const floatingPhone =
            document.querySelector(
                ".floating-phone"
            );


        if (floatingWhatsApp) {

            floatingWhatsApp.href =
                `https://wa.me/${kabugaWhatsApp}`;
        }


        if (floatingPhone) {

            floatingPhone.href =
                `tel:+${kabugaWhatsApp}`;
        }


        // -------------------------------------------------
        // FORM ELEMENTS
        // -------------------------------------------------

        const fullName =
            document.getElementById(
                "fullName"
            );


        const phone =
            document.getElementById(
                "phone"
            );


        const location =
            document.getElementById(
                "location"
            );


        const eventType =
            document.getElementById(
                "eventType"
            );


        const guests =
            document.getElementById(
                "guests"
            );


        const eventDate =
            document.getElementById(
                "eventDate"
            );


        const startTime =
            document.getElementById(
                "startTime"
            );


        const duration =
            document.getElementById(
                "duration"
            );


        const specialRequest =
            document.getElementById(
                "specialRequest"
            );


        // -------------------------------------------------
        // BUTTONS
        // -------------------------------------------------

        const viewMenuBtn =
            document.getElementById(
                "viewMenuBtn"
            );


        const continueBookingBtn =
            document.getElementById(
                "continueBookingBtn"
            );


        // -------------------------------------------------
        // SUMMARY
        // -------------------------------------------------

        const summaryName =
            document.getElementById(
                "summaryName"
            );


        const summaryPhone =
            document.getElementById(
                "summaryPhone"
            );


        const summaryLocation =
            document.getElementById(
                "summaryLocation"
            );


        const summaryEvent =
            document.getElementById(
                "summaryEvent"
            );


        const summaryGuests =
            document.getElementById(
                "summaryGuests"
            );


        const summaryDate =
            document.getElementById(
                "summaryDate"
            );


        const summaryTime =
            document.getElementById(
                "summaryTime"
            );


        const summaryDuration =
            document.getElementById(
                "summaryDuration"
            );


        const summaryTotal =
            document.getElementById(
                "summaryTotal"
            );


        // -------------------------------------------------
        // PRICE
        // -------------------------------------------------

        const pricePerHour =
            5000;


        const formatRWF =
            amount =>
                new Intl.NumberFormat(
                    "en-RW"
                ).format(amount);


        // -------------------------------------------------
        // LOCAL STORAGE
        // -------------------------------------------------

        const bookingStorageKey =
            "dreamLandSpaceBooking";


        // -------------------------------------------------
        // UPDATE SUMMARY
        // -------------------------------------------------

        function updateSpaceSummary() {

            const selectedDuration =
                Number(
                    duration?.value || 0
                );


            const total =
                selectedDuration *
                pricePerHour;


            if (summaryName) {

                summaryName.textContent =
                    fullName?.value || "-";
            }


            if (summaryPhone) {

                summaryPhone.textContent =
                    phone?.value || "-";
            }


            if (summaryLocation) {

                summaryLocation.textContent =
                    location?.value || "-";
            }


            if (summaryEvent) {

                summaryEvent.textContent =
                    eventType?.value || "-";
            }


            if (summaryGuests) {

                summaryGuests.textContent =
                    guests?.value || "-";
            }


            if (summaryDate) {

                summaryDate.textContent =
                    eventDate?.value || "-";
            }


            if (summaryTime) {

                summaryTime.textContent =
                    startTime?.value || "-";
            }


            if (summaryDuration) {

                if (selectedDuration) {

                    summaryDuration.textContent =
                        currentLanguage === "rw"
                            ? `${selectedDuration} ${selectedDuration === 1 ? "isaha" : "amasaha"}`
                            : `${selectedDuration} hour(s)`;

                } else {

                    summaryDuration.textContent =
                        "-";
                }
            }


            if (summaryTotal) {

                summaryTotal.textContent =
                    `${formatRWF(total)} RWF`;
            }
        }


        // -------------------------------------------------
        // SAVE BOOKING
        // -------------------------------------------------

        function saveSpaceBooking() {

            const bookingData = {

                fullName:
                    fullName?.value || "",

                phone:
                    phone?.value || "",

                location:
                    location?.value || "",

                eventType:
                    eventType?.value || "",

                guests:
                    guests?.value || "",

                eventDate:
                    eventDate?.value || "",

                startTime:
                    startTime?.value || "",

                duration:
                    duration?.value || "",

                specialRequest:
                    specialRequest?.value || ""
            };


            localStorage.setItem(
                bookingStorageKey,
                JSON.stringify(
                    bookingData
                )
            );
        }


        // -------------------------------------------------
        // RESTORE BOOKING
        // -------------------------------------------------

        function restoreSpaceBooking() {

            const saved =
                localStorage.getItem(
                    bookingStorageKey
                );


            if (!saved) return;


            try {

                const data =
                    JSON.parse(
                        saved
                    );


                if (fullName)
                    fullName.value =
                        data.fullName || "";


                if (phone)
                    phone.value =
                        data.phone || "";


                if (location)
                    location.value =
                        data.location || "";


                if (eventType)
                    eventType.value =
                        data.eventType || "";


                if (guests)
                    guests.value =
                        data.guests || "";


                if (eventDate)
                    eventDate.value =
                        data.eventDate || "";


                if (startTime)
                    startTime.value =
                        data.startTime || "";


                if (duration)
                    duration.value =
                        data.duration || "";


                if (specialRequest)
                    specialRequest.value =
                        data.specialRequest || "";


                updateSpaceSummary();


            } catch (error) {

                console.warn(
                    "Could not restore booking data.",
                    error
                );
            }
        }


        // -------------------------------------------------
        // FORM INPUT EVENTS
        // -------------------------------------------------

        [
            fullName,
            phone,
            location,
            eventType,
            guests,
            eventDate,
            startTime,
            duration,
            specialRequest
        ]
        .filter(Boolean)
        .forEach(
            field => {

                field.addEventListener(
                    "input",
                    () => {

                        updateSpaceSummary();

                        saveSpaceBooking();
                    }
                );


                field.addEventListener(
                    "change",
                    () => {

                        updateSpaceSummary();

                        saveSpaceBooking();
                    }
                );
            }
        );


        // -------------------------------------------------
        // VIEW MENU
        // -------------------------------------------------

        if (viewMenuBtn) {

            viewMenuBtn.addEventListener(
                "click",
                () => {

                    saveSpaceBooking();

                    window.location.href =
                        "menu.html";
                }
            );
        }


        // -------------------------------------------------
        // CONTINUE BOOKING
        // -------------------------------------------------

        if (continueBookingBtn) {

            continueBookingBtn.addEventListener(
                "click",
                () => {

                    saveSpaceBooking();

                    updateSpaceSummary();


                    const summaryCard =
                        document.querySelector(
                            ".booking-summary-card"
                        );


                    if (summaryCard) {

                        summaryCard.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }
            );
        }


        // -------------------------------------------------
        // SUBMIT BOOKING
        // -------------------------------------------------

        spaceBookingForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                if (
                    !fullName?.value.trim() ||
                    !phone?.value.trim() ||
                    !location?.value.trim() ||
                    !eventType?.value.trim() ||
                    !guests?.value ||
                    !eventDate?.value ||
                    !startTime?.value ||
                    !duration?.value
                ) {

                    alert(
                        currentLanguage === "rw"
                            ? "Nyamuneka uzuza amakuru yose asabwa."
                            : "Please complete all required fields."
                    );

                    return;
                }


                const selectedDuration =
                    Number(
                        duration.value
                    );


                const total =
                    selectedDuration *
                    pricePerHour;


                const durationText =
                    currentLanguage === "rw"
                        ? `${selectedDuration} ${selectedDuration === 1 ? "isaha" : "amasaha"}`
                        : `${selectedDuration} hour(s)`;


                const specialRequestText =
                    specialRequest?.value ||
                    (
                        currentLanguage === "rw"
                            ? "Nta cyifuzo cyihariye."
                            : "None"
                    );


                const message =
                    currentLanguage === "rw"

                    ? `Dream Land Motel - Gusaba Ahantu ho Gukorera Ibirori

Amazina: ${fullName.value}
Telefone: ${phone.value}
Aho utuye: ${location.value}

Ubwoko bw'igikorwa: ${eventType.value}
Umubare w'abashyitsi: ${guests.value}

Itariki: ${eventDate.value}
Igihe cyo gutangira: ${startTime.value}
Igihe cyafashwe: ${durationText}

Amafaranga yose: ${formatRWF(total)} RWF

Icyifuzo cyihariye:
${specialRequestText}`

                    : `Dream Land Motel - Space Booking

Name: ${fullName.value}
Phone: ${phone.value}
Location: ${location.value}

Event Type: ${eventType.value}
Guests: ${guests.value}

Date: ${eventDate.value}
Start Time: ${startTime.value}
Duration: ${durationText}

Total: ${formatRWF(total)} RWF

Special Request:
${specialRequestText}`;


                const whatsappURL =
                    `https://wa.me/${kabugaWhatsApp}?text=${encodeURIComponent(message)}`;


                saveSpaceBooking();


                window.open(
                    whatsappURL,
                    "_blank"
                );
            }
        );


        // -------------------------------------------------
        // RESTORE SAVED INFORMATION
        // -------------------------------------------------

        restoreSpaceBooking();
    }


    // =====================================================
    // PAGE READY
    // =====================================================

    document.body.classList.add(
        "page-ready"
    );

});