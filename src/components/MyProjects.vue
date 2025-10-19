<script setup lang="ts">
import { Ref, ref, inject, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue';


// obrazki do cardów
import seenemaImg from '../assets/img/seenema.jpg'
import quikbookImg from '../assets/img/quikbook.jpg'
import pocketPalImg from '../assets/img/pocketpal.jpg'
import snapStatsImg from '../assets/img/snapstats.jpg'
import ratePlayImg from '../assets/img/rateplay.jpg'
import pongSTM32Img from '../assets/img/pong-stm32.jpg'
import asteroidsImg from '../assets/img/asteroids.jpg'
import mazesolversImg from '../assets/img/mazesolvers.jpg'
import comingSoonImg from '../assets/img/coming.jpg'

// obrazki do swipera seenema
import seenemaSwiperImg1 from '../assets/img/seenema/seenema1.jpg'
import seenemaSwiperImg2 from '../assets/img/seenema/seenema2.jpg'
import seenemaSwiperImg3 from '../assets/img/seenema/seenema3.jpg'
import seenemaSwiperImg4 from '../assets/img/seenema/seenema4.jpg'

// obrazki do swipera quikbook
import quikbookSwiperImg1 from '../assets/img/quikbook/quikbook1.jpg'
import quikbookSwiperImg2 from '../assets/img/quikbook/quikbook2.jpg'
import quikbookSwiperImg3 from '../assets/img/quikbook/quikbook3.jpg'
import quikbookSwiperImg4 from '../assets/img/quikbook/quikbook4.jpg'
import quikbookSwiperImg5 from '../assets/img/quikbook/quikbook5.jpg'

// obrazki do swipera pocketpal
import pocketPalSwiperImg1 from '../assets/img/pocketpal/pocketpal1.jpg'
import pocketPalSwiperImg2 from '../assets/img/pocketpal/pocketpal2.jpg'
import pocketPalSwiperImg3 from '../assets/img/pocketpal/pocketpal3.jpg'
import pocketPalSwiperImg4 from '../assets/img/pocketpal/pocketpal4.jpg'
import pocketPalSwiperImg5 from '../assets/img/pocketpal/pocketpal5.jpg'

// obrazki do swipera snapstats
import snapStatsSwiperImg1 from '../assets/img/snapstats/snapstats1.jpg'
import snapStatsSwiperImg2 from '../assets/img/snapstats/snapstats2.jpg'
import snapStatsSwiperImg3 from '../assets/img/snapstats/snapstats3.jpg'
import snapStatsSwiperImg4 from '../assets/img/snapstats/snapstats4.jpg'
import snapStatsSwiperImg5 from '../assets/img/snapstats/snapstats5.jpg'
import snapStatsSwiperImg6 from '../assets/img/snapstats/snapstats6.jpg'
import snapStatsSwiperImg7 from '../assets/img/snapstats/snapstats7.jpg'

//obrazki do swipera rateplay
import ratePlaySwiperImg1 from '../assets/img/rateplay/rateplay1.jpg'
import ratePlaySwiperImg2 from '../assets/img/rateplay/rateplay2.jpg'
import ratePlaySwiperImg3 from '../assets/img/rateplay/rateplay3.jpg'
import ratePlaySwiperImg4 from '../assets/img/rateplay/rateplay4.jpg'
import ratePlaySwiperImg5 from '../assets/img/rateplay/rateplay5.jpg'
import ratePlaySwiperImg6 from '../assets/img/rateplay/rateplay6.jpg'
import ratePlaySwiperImg7 from '../assets/img/rateplay/rateplay7.jpg'

//obrazki do swipera pongstm32
import pongSTM32SwiperImg1 from '../assets/img/pongstm/pongstm1.jpg'
import pongSTM32SwiperImg2 from '../assets/img/pongstm/pongstm2.jpg'

//obrazki do swipera asteroids
import asteroidsSwiperImg1 from '../assets/img/asteroids/asteroids1.jpg'
import asteroidsSwiperImg2 from '../assets/img/asteroids/asteroids2.jpg'
import asteroidsSwiperImg3 from '../assets/img/asteroids/asteroids3.jpg'

//obrazki do swipera mazesolvers
import mazesolversSwiperImg1 from '../assets/img/mazesolvers/mazesolvers1.jpg'
import mazesolversSwiperImg2 from '../assets/img/mazesolvers/mazesolvers2.jpg'

defineProps({
    msg: String,
})

const currentLang = inject<Ref<'pl' | 'en'>>('currentLang');

const projectsText = computed(() => ({
    title: currentLang?.value === 'pl' ? 'Projekty' : "My Projects",
    showMore: currentLang?.value === 'pl' ? 'Pokaż więcej' : "Show more",
    showLess: currentLang?.value === 'pl' ? 'Pokaż mniej' : "Show less",
    projekt: currentLang?.value === 'pl' ? 'Projekt' : 'Project',
    seenemaDesc: currentLang?.value === 'pl' ? 'Aplikacja do zarządzania kinem i rezerwacji biletów online.' : 'Cinema management and online ticket booking made easy.',
    seenemaText1: currentLang?.value === 'pl' ? 'Seenema to pełnoprawna aplikacja webowa typu full-stack, którą opracowaliśmy jako projekt zespołowy razem z moimi kolegami, Maciejem Ratajem i Marcelem Wójcikiem. Jest przeznaczona do zarządzania kinem oraz rezerwacji biletów online. System obejmuje funkcje takie jak dostęp oparty na rolach (super admin, admin, pracownik, klient), uwierzytelnianie JWT z automatycznym odświeżaniem sesji, rejestracja i odzyskiwanie konta, a także wybór miejsc i potwierdzenie rezerwacji.' : 'Seenema is a full-stack web application we developed as a team project together with my colleagues Maciej Rataj and Marcel Wójcik. It’s designed for cinema management and online ticket booking. The system includes features such as role-based access (super admin, admin, employee, customer), JWT authentication with automatic session refresh, account registration and recovery, as well as seat selection and booking confirmation.',
    seenemaText2: currentLang?.value === 'pl' ? 'Po stronie technicznej użyliśmy React + Vite, Tailwind CSS i NextUI do frontendu oraz Django REST Framework z PostgreSQL do backendu. Modularna struktura aplikacji pozwoliła nam pracować równolegle nad różnymi częściami systemu oraz utrzymać kod w sposób skalowalny i łatwy do zarządzania.' : 'On the technical side, we used React + Vite, Tailwind CSS, and NextUI for the frontend, and Django REST Framework with PostgreSQL for the backend. The modular structure of the app allowed us to work in parallel on different parts of the system and keep the codebase scalable and maintainable.',
    quikbookDesc: currentLang?.value === 'pl' ? 'Aplikacja internetowa do rezerwacji usług i zarządzania rezerwacjami.' : 'Web app for booking services and managing reservations.',
    quikbookText1: currentLang?.value === 'pl' ? 'Quikbook to nowoczesna aplikacja webowa, którą stworzyliśmy w zespole razem z Marcelem Wójcikiem i Maciejem Ratajem, aby uprościć rezerwacje usług online. Umożliwia klientom łatwe wyszukiwanie, rezerwowanie i zarządzanie rezerwacjami, podczas gdy dostawcy usług mogą sprawnie zarządzać swoją dostępnością, ofertą i zgłoszeniami klientów. Platforma obejmuje funkcje takie jak dedykowane konta dla klientów i usługodawców, intuicyjny interfejs użytkownika, zaawansowany system wyszukiwania i rezerwacji oraz uwierzytelnianie Google z możliwością odzyskiwania hasła.' : 'Quikbook is a modern web application we created as a team with Marcel Wójcik and Maciej Rataj to simplify online service bookings. It provides a smooth process for customers to search, book, and manage reservations, while service providers can easily manage their availability, services, and client requests. The platform includes features such as dedicated accounts for clients and providers, intuitive UI, advanced search and reservation system, and Google authentication with password recovery.',
    quikbookText2: currentLang?.value === 'pl' ? 'Po stronie technicznej Quikbook został zbudowany przy użyciu React, TypeScript, Vite, Tailwind CSS i Material Tailwind na frontendzie, a także zintegrowany z Google Firebase do uwierzytelniania, bazy danych Firestore oraz bezpiecznego przechowywania danych. Wykorzystanie nowoczesnych technologii pozwoliło nam stworzyć responsywne, skalowalne i bezpieczne rozwiązanie, które usprawnia proces rezerwacji usług online.' : 'On the technical side, we built Quikbook with React, TypeScript, Vite, Tailwind CSS, and Material Tailwind for the frontend, and integrated it with Google Firebase for authentication, Firestore database, and secure data storage. The use of modern technologies allowed us to deliver a responsive, scalable, and secure solution that streamlines booking services online.',
    rateplayDesc: currentLang?.value === 'pl' ? 'Aplikacja online dla graczy, umożliwiająca dzielenie się doświadczeniami.' : 'Online app for game enthusiasts to connect and share experiences.',
    rateplayText1: currentLang?.value === 'pl' ? 'RatePlay to kompleksowa platforma webowa stworzona z myślą o miłośnikach gier komputerowych. Głównym celem projektu jest budowanie aktywnej społeczności, która umożliwia użytkownikom ocenianie ulubionych tytułów oraz pisanie szczegółowych recenzji. System oceniania i recenzowania stanowi serce aplikacji, wspierając interakcję i wymianę pomysłów wśród fanów rozrywki cyfrowej. Frontend aplikacji został zbudowany w Angularze i TypeScript, co zapewnia solidną i skalowalną strukturę. Nowoczesny i responsywny interfejs użytkownika osiągnięto dzięki Tailwind CSS oraz bibliotece komponentów DaisyUI, tworząc minimalistyczny, czysty i spójny design. Aplikacja jest w pełni responsywna, działając równie dobrze na urządzeniach mobilnych, jak i komputerach stacjonarnych.' : 'RatePlay is a comprehensive web platform created for computer game enthusiasts. The core goal of the project is to build an active social community that allows users to rate their favorite titles and write detailed reviews. The rating and reviewing system is the heart of this application, fostering interaction and exchange of ideas among digital entertainment fans. The application frontend is built with Angular and TypeScript, ensuring a robust and scalable structure. A modern and responsive user interface is achieved using Tailwind CSS and the DaisyUI component library, which together create a minimalist, clean, and cohesive design. The application is fully responsive, working equally well on mobile and desktop devices.',
    rateplayText2: currentLang?.value === 'pl' ? 'Projekt obejmuje pełne wsparcie dla wszystkich pięciu wymaganych punktów końcowych API (publiczny, uwierzytelnianie, autoryzowany, administracyjny oraz LLM). Centralnym elementem jest modal uwierzytelniania, który zawiera wszystkie funkcje związane z kontem użytkownika: logowanie, rejestrację, aktywację konta, zmianę hasła oraz jego odzyskiwanie. Zalogowani użytkownicy mogą przeglądać, sortować i oceniać gry. Zaimplementowano wszystkie punkty końcowe API wymagające tokena, w tym kluczowe funkcje związane z recenzjami gier (dodawanie, edytowanie i usuwanie recenzji oraz ocen). Dla użytkowników z uprawnieniami administratora dostępny jest dedykowany panel umożliwiający zarządzanie kontami, w tym dodawanie nowych użytkowników, kontrolę ich statusu aktywności oraz nadawanie uprawnień administratora.' : 'The project implements full support for all five required API endpoints (public, authentication, authenticated, admin, and LLM). The central element is the authentication modal, which contains all user account functionalities: login, registration, account activation, password change, and recovery. Logged-in users can view, sort, and rate games. All token-authenticated API endpoints have been implemented, including key functions related to game reviews (adding, editing, and deleting reviews and ratings). For users with administrator privileges, a dedicated panel allows for user management, including adding new accounts, controlling their activity status, and granting admin rights.',
    rateplayText3: currentLang?.value === 'pl' ? 'Z technicznego punktu widzenia projekt wykorzystuje routing do nawigacji pomiędzy różnymi widokami (np. lista gier, panel administratora). Logika biznesowa i komunikacja z API są realizowane za pomocą pięciu niestandardowych serwisów (admin, auth, games, gemini, reviews), które korzystają z HttpClient Angulara. Dodatkowe funkcje obejmują wielokrotne użycie API do wysyłania wiadomości e-mail w kluczowych procesach (potwierdzenie rejestracji, tymczasowe hasło, reset hasła). Istotnym wyróżnikiem jest integracja z API modelu LLM (Gemini AI). Funkcje te są dostępne w dedykowanej zakładce „Sztuczna Inteligencja” i obejmują generowanie losowych gier, pobieranie gier po ID oraz tworzenie tytułów na podstawie opisu. Dodatkowo, na stronie każdej gry dostępna jest opcja wygenerowania podsumowania recenzji przez AI.' : 'From a technical perspective, the project uses routing to navigate between different views (e.g., game list, admin panel). Business logic and API communication are implemented using five custom services (admin, auth, games, gemini, reviews), which utilize Angular\'s `HttpClient`. Additional features include multiple API uses for sending emails during key processes (registration confirmation, temporary password, password reset). A key differentiator is the integration with an LLM model API (Gemini AI). These functions are available in a dedicated "Artificial Intelligence" tab and include generating random games, fetching games by ID, and generating titles based on a description. Furthermore, on each game\'s page, there is an option to generate an AI review summary.',
    snapstatsDesc: currentLang?.value === 'pl' ? 'Platforma internetowa dla fotografów do dzielenia się, analizowania i krytykowania zdjęć.' : 'Online platform for photographers to share, analyze, and critique photos.',
    snapstatsText1: currentLang?.value === 'pl' ? 'SnapStats to oryginalna aplikacja webowa, którą opracowałem jako projekt indywidualny w ramach pracy inżynierskiej. Została stworzona, aby sprostać specyficznym potrzebom profesjonalnych fotografów, oferując zaawansowane narzędzie online do udostępniania oraz dogłębnej analizy technicznej prac fotograficznych. System wypełnia lukę rynkową, oferując wyrafinowane funkcje analityczne, wcześniej dostępne głównie w aplikacjach desktopowych, jednocześnie zapewniając dostępność i elastyczność nowoczesnej platformy webowej.' : 'SnapStats is an original web application I developed as a solo project for my Engineering Thesis. It was created to address the specific needs of professional photographers for an advanced online tool to facilitate the sharing and in-depth technical analysis of photographic works. The system fills a market gap by offering sophisticated analytical functions, previously found mainly in desktop applications, while providing the accessibility and flexibility of a modern web platform.',
    snapstatsText2: currentLang?.value === 'pl' ? 'Platforma SnapStats umożliwia użytkownikom tworzenie własnych portfolio, porównywanie swoich prac z pracami innych oraz czerpanie inspiracji ze społeczności. Kluczową funkcją jest możliwość przeglądania szczegółowych parametrów technicznych (danych EXIF) dowolnego zdjęcia, w tym modelu aparatu, ISO, czasu naświetlania i przysłony — co stanowi nieocenione źródło wiedzy i narzędzie do krytyki fotograficznej. Zarejestrowani użytkownicy mogą polubić zdjęcia, zapisywać je w ulubionych oraz otrzymywać spersonalizowane rekomendacje oparte na zbiorowych preferencjach społeczności. System został zaprojektowany z wyraźnym podziałem ról użytkowników (Gość, Użytkownik, Administrator) i obejmuje zaawansowane funkcje filtrowania, takie jak sortowanie zdjęć według marki i modelu sprzętu.' : 'The SnapStats platform allows users to curate their portfolios, compare their work with peers, and seek inspiration from the community. A core feature is the ability to view detailed technical parameters (EXIF data) of any photograph, including the camera model, ISO, shutter speed, and aperture—an invaluable resource for learning and critique. Registered users can like photos, save them to favorites, and receive personalized recommendations based on the community\'s collective preferences. The system is designed with distinct user roles (Guest, User, Administrator) and includes advanced filtering capabilities, such as sorting photos by equipment brand and model.',
    snapstatsText3: currentLang?.value === 'pl' ? 'Z technicznego punktu widzenia SnapStats został zbudowany w oparciu o nowoczesny i solidny stack technologiczny. Szybki i reaktywny frontend oparty jest na JavaScript i bibliotece ReactJS, a biblioteka komponentów Material UI zapewnia czysty i nowoczesny interfejs. Backend oraz warstwa danych wykorzystują platformę Firebase do bezpiecznego uwierzytelniania użytkowników oraz niezawodnego przechowywania danych w Firestore. Taki wybór architektury gwarantuje, że aplikacja jest wysoce skalowalna, bezpieczna i zapewnia ciągłą dostępność, umożliwiając efektywne przetwarzanie złożonych danych fotograficznych i społecznościowych.' : 'From a technical perspective, SnapStats is built on a robust and modern stack. The fast and reactive frontend is powered by JavaScript and the ReactJS library, with the Material UI component library ensuring a clean, modern interface. The backend and data layer leverage the Firebase platform for secure user Authentication and reliable data storage via Firestore. This architectural choice ensures the application is highly scalable, secure, and provides continuous availability for handling complex photographic and community data efficiently.',
    pocketPalDesc: currentLang?.value === 'pl' ? 'Śledź swoje wydatki i zarządzaj finansami za pomocą wizualizacji danych.' : 'Track your spending and manage finances with visualized data.',
    pocketPalText1: currentLang?.value ==='pl' ? 'PocketPal to nowoczesna aplikacja webowa, którą stworzyliśmy w zespole razem z Marcelem Wójcikiem i Maciejem Ratajem, aby uprościć zarządzanie finansami osobistymi i rodzinnymi. Umożliwia użytkownikom śledzenie wydatków i przychodów, kategoryzowanie transakcji, wizualizowanie budżetów za pomocą interaktywnych wykresów, zarządzanie wspólnymi budżetami rodzinnymi oraz generowanie raportów w formacie PDF. Platforma oferuje intuicyjny interfejs z powiadomieniami o powodzeniu lub niepowodzeniu działań, dzięki czemu użytkownicy mają pełną kontrolę nad swoimi finansami.' : 'PocketPal is a modern web application we developed as a team with Marcel Wójcik and Maciej Rataj to simplify personal and family finance management. It allows users to track expenses and incomes, categorize transactions, visualize budgets with interactive charts, manage shared family budgets, and generate PDF reports. The platform features an intuitive interface with notifications for successful or failed actions, keeping users fully in control of their finances.',
    pocketPalText2: currentLang?.value ==='pl' ? 'Użytkownicy mogą rejestrować się i logować za pomocą tradycyjnych formularzy lub kont Google, resetować hasła oraz zarządzać swoimi profilami. Funkcja rodzinna pozwala na tworzenie lub dołączanie do wspólnych grup budżetowych, monitorowanie zbiorczych wydatków, zapraszanie członków za pomocą kodów oraz zarządzanie rolami w grupie. PocketPal łączy prostotę, interaktywność i praktyczne narzędzia finansowe, pomagając osobom i rodzinom zachować porządek i świadomość finansową.' : 'Users can register and log in via traditional forms or Google accounts, reset passwords, and manage their profiles. The family feature lets users create or join shared budget groups, monitor collective spending, invite members via codes, and manage roles within the group. PocketPal combines simplicity, interactivity, and practical financial tools to help individuals and families stay organized and financially aware.',
    pocketPalText3: currentLang?.value ==='pl' ? 'Po stronie technicznej PocketPal został zbudowany przy użyciu React i Vite, co zapewnia szybki i reaktywny frontend, Mantine do komponentów UI, Nivo do interaktywnych wykresów oraz Firebase do usług backendowych, w tym Firestore do przechowywania danych i Authentication do bezpiecznego logowania. Aplikacja wykorzystuje również React Router do nawigacji oraz jsPDF do generowania raportów PDF. Taki stack technologiczny gwarantuje responsywną, skalowalną i bezpieczną aplikację, zdolną do efektywnego przetwarzania danych finansowych użytkowników i rodzin.' : 'On the technical side, PocketPal is built with React and Vite for a fast and reactive frontend, Mantine for UI components, Nivo for interactive charts, and Firebase for backend services including Firestore for data storage and Authentication for secure login. The app also uses React Router for navigation and jsPDF for generating PDF reports. This stack ensures a responsive, scalable, and secure application capable of handling user and family financial data efficiently.',
    pongSTM32Desc: currentLang?.value === 'pl' ? 'Gra Pong odtworzona na mikrokontrolerze STM32.' : 'Fun Pong Game recreated on STM32 microcontroller.',
    pongSTM32Text1: currentLang?.value === 'pl' ? 'Projekt PONG STM32 został stworzony w ramach zajęć na uczelni technicznej. Zadaniem było opracowanie programu dla płytki rozwojowej STM32 w języku C. Postanowiłem stworzyć coś ciekawego — grę Pong obsługującą dwóch graczy i wyposażoną w prostą sztuczną inteligencję. Gra zawiera system punktacji, możliwość resetu gry oraz mechanikę odbijania piłki reagującą na ruch paletek. Sterowanie realizowane jest za pomocą potencjometrów. Projekt był bardzo angażującym doświadczeniem w programowaniu układów wbudowanych, pozwalającym pogłębić wiedzę na temat niskopoziomowej interakcji ze sprzętem oraz tworzenia oprogramowania dla mikrokontrolerów.' : 'The PONG STM32 project was created as part of coursework at the university of technology. The task was to develop a program for the STM32 development board in C language. I decided to create something interesting — a Pong game that supports two players and includes a simple AI. The game features scorekeeping, game reset functionality, and ball bouncing mechanics that respond to the paddle movement. Control is handled via potentiometers. This project was a very engaging experience in embedded programming, allowing me to deepen my understanding of low-level hardware interaction and microcontroller software development.',
    mazesolversDesc: currentLang?.value === 'pl' ? 'Cztery aplikacje MazeSolver stworzone w ramach mojej pracy magisterskiej.' : 'Four MazeSolver apps made as part of my Master\'s thesis.',
    mazesolversText1: currentLang?.value === 'pl' ? 'Projekt MazeSolver został opracowany w ramach mojej pracy magisterskiej. Składa się z czterech oddzielnych aplikacji stworzonych przy użyciu różnych technologii — JavaFX, Java Swing, Electron i Tauri — z których każda służy jako punkt odniesienia do porównania wydajności i różnic w implementacji między platformami. Wszystkie cztery aplikacje zostały zaprojektowane tak, aby były jak najbardziej podobne zarówno pod względem wyglądu, jak i implementacji algorytmów, co zapewnia rzetelne i wartościowe porównanie. Aplikacje generują labirynty o konfigurowalnych rozmiarach przy użyciu jednego z kilku algorytmów: Depth-First Search (DFS), algorytmu Prima oraz Recursive Division. Głównym celem projektu było ocenić i porównać wydajność tych technologii pod kątem czasu generowania labiryntu, zużycia pamięci, rozmiaru aplikacji oraz czasu uruchamiania. Badania te dostarczyły cennych informacji na temat działania zarówno natywnych, jak i webowych frameworków, oferując fascynujące porównanie ich efektywności, responsywności i doświadczenia deweloperskiego.' : 'The MazeSolver project was developed as part of my Master\'s thesis. It consists of four separate applications built using different technologies — JavaFX, Java Swing, Electron, and Tauri — each serving as a benchmark for performance and implementation differences across platforms. All four applications were designed to be as similar as possible in both appearance and algorithm implementation to ensure a fair and meaningful comparison. They generate mazes of customizable sizes using one of several algorithms: Depth-First Search (DFS), Prim’s algorithm, and Recursive Division. The main goal of the project was to evaluate and compare the performance of these technologies in terms of maze generation time, memory consumption, application size, and startup time. This research provided valuable insights into the inner workings of both native and web-based development frameworks, offering a fascinating comparison between their efficiency, responsiveness, and development experience.',
    asteroidsDesc: currentLang?.value === 'pl' ? 'Gra Asteroids stworzona w C++ i Qt z płynnymi kontrolkami i fizyką.' : 'Asteroids game made with C++ and Qt with smooth controls and physics.',
    asteroidsText1: currentLang?.value === 'pl' ? 'Projekt ASTEROIDS został stworzony w ramach zajęć na uczelni technicznej. Został opracowany przy użyciu Qt i C++ i symuluje klasyczną grę arkadową w kosmosie, w której gracz steruje statkiem kosmicznym w polu asteroid. Statek posiada płynną mechanikę ruchu, obejmującą przyspieszanie, zwalnianie oraz obrót, co zapewnia realistyczne wrażenia z lotu. Asteroidy pojawiają się w losowych rozmiarach i dynamicznie odbijają się od siebie, tworząc żywe i nieprzewidywalne środowisko. Gracz może strzelać pociskami, aby niszczyć asteroidy i zdobywać punkty, podczas gdy kolizje z nimi zmniejszają liczbę żyć. Gra zawiera również system punktacji i śledzenia życia. Projekt był bardzo angażującym i edukacyjnym doświadczeniem, pozwalającym wzmocnić umiejętności w programowaniu obiektowym, symulacji fizyki oraz tworzeniu interaktywnych interfejsów GUI w Qt.' : 'The ASTEROIDS project was developed as part of coursework at the university of technology. It was created using Qt and C++, and it simulates a classic space arcade game where the player controls a spaceship in an asteroid field. The ship features smooth movement mechanics, including acceleration, deceleration, and rotation, providing a realistic flying experience. Asteroids spawn with random sizes and bounce off each other dynamically, creating a lively and unpredictable environment. The player can shoot projectiles to destroy asteroids and earn points, while collisions with them reduce the number of lives. The game also includes scoring and life tracking systems. This project was a highly engaging and educational experience, allowing me to strengthen my skills in object-oriented programming, physics simulation, and interactive GUI development in Qt.',
    nextProjectTitle: currentLang?.value === 'pl' ? 'Następny Projekt' : 'Next Project',
    nextProjectDesc: currentLang?.value === 'pl' ? 'Więcej projektów wkrótce!' : 'More projects coming very soon!',

}));

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // podstawowe style
import 'swiper/css/navigation'; // jeśli chcesz strzałki
import 'swiper/css/pagination'; // jeśli chcesz kropki

import { Navigation, Pagination } from 'swiper/modules';
import { snap } from 'gsap';

const showMore = ref(false);
</script>

<template>

    <!-- Tekst My Projects -->
    <div class="max-w-screen-xl mx-auto">
        <!-- ciemny kolor -->
        <h1 class="text-xl lg:text-5xl font-bold my-8 pl-8 text-gray-800">{{ projectsText.title }}</h1>
        <!-- Karty projektów -->

        <div
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 pb-0 max-w-screen-xl mx-auto justify-items-center items-start">

            <!-- Seenema Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="seenema_modal.showModal()">
                <figure>
                    <img :src="seenemaImg" alt="Seenema" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Seenema
                        <div class="badge badge-secondary">Python</div>
                        <div class="badge badge-secondary">PostgreSQL</div>
                    </h2>
                    <!-- apka do zarządzania kinem i rezerwacji biletów -->
                    <p>{{ projectsText.seenemaDesc }}</p>
                </div>
            </div>

            <!-- Quikbook Card -->
            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                onclick="quikbook_modal.showModal()" :class="{ 'lg:mt-10': !showMore }">
                <figure>
                    <img :src="quikbookImg" alt="Quikbook" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Quikbook
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <!-- usługi i rezerwacje -->
                    <p>{{ projectsText.quikbookDesc }}</p>
                </div>
            </div>

            <!-- RatePlay Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="rateplay_modal.showModal()"
                :class="{ 'lg:mt-20': !showMore }">
                <figure>
                    <img :src="ratePlayImg" alt="RatePlay" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        RatePlay
                        <div class="badge badge-secondary">Angular</div>
                        <div class="badge badge-secondary">Gemini API</div>
                    </h2>
                    <p>{{ projectsText.rateplayDesc }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Ukryte projekty -->
    <transition name="fade" mode="out-in">
        <!-- SnapStats Card -->
        <div v-show="showMore"
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 max-w-screen-xl mx-auto justify-items-center">
            <div class="card bg-base-100 w-full shadow-sm" onclick="snapstats_modal.showModal()">
                <figure>
                    <img :src="snapStatsImg" alt="SnapStats" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        SnapStats
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <p>{{ projectsText.snapstatsDesc }}</p>
                </div>
            </div>

            <!-- PocketPal Card -->
            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                onclick="pocketpal_modal.showModal()">
                <figure>
                    <img :src="pocketPalImg" alt="PocketPal" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        PocketPal
                        <div class="badge badge-secondary">Typescript</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <p>{{ projectsText.pocketPalDesc }}</p>
                </div>
            </div>

            <!-- Pong STM32 Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="pongstm32_modal.showModal()">
                <figure>
                    <img :src="pongSTM32Img" alt="Pong STM32" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Pong STM32
                        <div class="badge badge-secondary">C</div>
                        <div class="badge badge-secondary">Embedded</div>
                    </h2>
                    <p>{{ projectsText.pongSTM32Desc }}</p>
                </div>
            </div>

            <!-- MazeSolver Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="mazesolvers_modal.showModal()">
                <figure>
                    <img :src="mazesolversImg" alt="MazeSolver" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        MazeSolvers
                        <div class="badge badge-secondary">Java</div>
                        <div class="badge badge-secondary">Tauri</div>
                    </h2>
                    <p>{{ projectsText.mazesolversDesc }}</p>
                </div>
            </div>

            <!-- Asteroids Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="asteroids_modal.showModal()">
                <figure>
                    <img :src="asteroidsImg" alt="Asteroids" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Asteroids
                        <div class="badge badge-secondary">QT</div>
                        <div class="badge badge-secondary">C++</div>
                    </h2>
                    <p>{{ projectsText.asteroidsDesc }}</p>
                </div>
            </div>

            <!-- Coming Soon -->
            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img :src="comingSoonImg" alt="Coming Soon" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {{ projectsText.nextProjectTitle }}
                        <div class="badge badge-secondary">?</div>
                        <div class="badge badge-secondary">?</div>
                    </h2>
                    <p>{{ projectsText.nextProjectDesc }}</p>
                </div>
            </div>
        </div>
    </transition>

    <!-- Przycisk Show More -->
    <div class="flex justify-center my-6">
        <button class="btn btn-primary btn-wide !bg-base-100" @click="showMore = !showMore">
            {{ showMore ? projectsText.showLess : projectsText.showMore }}
        </button>
    </div>

    <!-- Modale -->

    <!-- Seenema Modal -->
    <dialog id="seenema_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt}} - Seenema</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.seenemaText1 }}
            </p>

            <p class="pt-8">{{ projectsText.seenemaText2 }}</p>
        </div>
    </dialog>

    <!-- Quikbook Modal -->
    <dialog id="quikbook_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt}} - Quikbook</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.quikbookText1 }}
            </p>

            <p class="pt-8">{{ projectsText.quikbookText2 }}
            </p>
        </div>
    </dialog>

    <!-- PocketPal Modal -->
    <dialog id="pocketpal_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt}} - PocketPal</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.pocketPalText1 }}
            </p>

            <p class="pt-8">{{ projectsText.pocketPalText2 }}
            </p>

            <p class="pt-8">{{ projectsText.pocketPalText3 }}
            </p>
        </div>
    </dialog>

    <!-- SnapStats Modal -->
    <dialog id="snapstats_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt }} - SnapStats</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg6" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg7" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.snapstatsText1 }}
            </p>

            <p class="pt-8">{{ projectsText.snapstatsText2 }}
            </p>

            <p class="pt-8">{{ projectsText.snapstatsText3 }}
            </p>
        </div>
    </dialog>

    <!-- RatePlay Modal -->
    <dialog id="rateplay_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt }} - RatePlay</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg6" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg7" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.rateplayText1 }}
            </p>

            <p class="pt-8">{{ projectsText.rateplayText2 }}
            </p>

            <p class="pt-8">{{ projectsText.rateplayText3 }}
            </p>
        </div>
    </dialog>

    <!-- Pong Modal -->
    <dialog id="pongstm32_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt }} - Pong STM32</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pongSTM32SwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pongSTM32SwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.pongSTM32Text1 }}</p>
        </div>
    </dialog>

    <!-- MazeSolver Modals -->
    <dialog id="mazesolvers_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt }} - MazeSolver</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="mazesolversSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="mazesolversSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.mazesolversText1 }}</p>
        </div>
    </dialog>

    <!-- Asteroids Modal -->
    <dialog id="asteroids_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">{{ projectsText.projekt }} - Asteroids</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="asteroidsSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="asteroidsSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="asteroidsSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">{{ projectsText.asteroidsText1 }}</p>
        </div>
    </dialog>

</template>

<style scoped>
.badge {
    background-color: tomato;
    color: white;
    /* font-weight: 500; */
    border: none;
}

.card {
    transition:
        margin-top 0.5s cubic-bezier(0.40, 0.00, 0.20, 1.00),
        transform 0.1s cubic-bezier(0.40, 0.00, 0.20, 1.00);
}

.card:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: transform 0.1s cubic-bezier(0.40, 0.00, 0.20, 1.00);
    /* szybki scale tylko przy hover */
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: tomato;
}

:deep(.swiper-pagination-bullet) {
    background: gray;
    /* normalne kropki */
}

:deep(.swiper-pagination-bullet-active) {
    background: tomato;
    /* aktywna kropka */
}

.read-the-docs {
    color: #888;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}
</style>
