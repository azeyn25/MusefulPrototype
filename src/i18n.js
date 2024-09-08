import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        de: {
            translation: {
                greeting: "Deine personalisierte Museumserfahrung",
                explanation: "Erlebe und Interagiere mit Ausstellungsobjekten wie nie zuvor mit HIlfe von Künstlicher Intelligenz und Augmented Reality",
                welcome: "Willkommen!",
                questions: "Bevor es losgeht, haben wir ein paar Fragen",
                losgehts: "Los geht’s",
                whatlanguage: "Welche Sprache sprichst Du?",
                howold: "Wie alt bist Du?",
                buttonweiter: "weiter",
                interest: "Wie viel Interesse hast Du?",
                scholar: "Scholar",
                muser: "Muser",
                wanderer: "Wanderer",
                angetrieben: "Wissen ist der Schlüssel. Du möchtest alle Informationen zu der Ausstellung erhalten.",
                schnell: "Du bist schnell unterwegs und möchtest knappe Informationen erhalten und nicht allzu viel Zeit im Museum verbringen.",
                wissen: "Du bist angetrieben durch deine endlose Neugier. Du möchtest einen tieferen Einblick bekommen.",
                zusammenfassend: "So, zusammenfassend",
                dubist: "Du bist",
                dusprichst: "Du sprichst",
                jetztstarten: "Jetzt starten",
                dauerausstellung: "Dauerausstellung",
                dauerausstellung1: "Mit 2.000 Objekten aus unserer Sammlung erzählen wir auf 3.000 Quadratmetern über 40.000 Jahre Kommunikationsgeschichte – vom Faustkeil bis zum Smartphone.",
                dauerausstellung2: "Entdecken Sie einzigartige Objekte wie die sagenumwobene Blaue Mauritius, das erste Telefon von Philipp Reis oder die legendäre Chiffriermaschine Enigma.",
                dauerausstellung3: "Verschicken Sie einen Brief mit der Rohrpost, morsen Sie ein Telegramm nach Hamburg oder präsentieren Sie die Nachrichten in userem Fernsehstudio. Vom Rauchzeichen über die Rohrpost bis zur virtuellen Botschaft: Das Museum für Kommunikation Berlin lässt das Thema Kommunikation vielfältig und interaktiv lebendig werden.",
                steinvonrosette: "Der Stein von Rosette oder Stein von Rosetta, auch kurz Rosetta-Stein (arabisch حجر رشيد, DMG Ḥaǧar Rašīd, französisch pierre de Rosette, englisch Rosetta Stone) ist das Fragment einer Stele aus Memphis (Ägypten) aus Granodiorit und enthält ein mehrsprachiges Synodaldekret von 196 v. Chr. aus der Zeit der altgriechisch-makedonisch-ptolemäischen Dynastie, erstellt im Auftrag des Königs Ptolemaios V. Epiphanes, eines Nachfolgers von Alexander dem Großen. Der Stein von Rosette war entscheidend für die Entschlüsselung der ägyptischen Hieroglyphen.",
            }
        },
        en: {
            translation: {
                greeting: "Your personalized museum experience",
                explanation: "Experience and interact with exhibits like never before with the help of artificial intelligence and augmented reality",
                welcome: "Welcome!",
                questions: "Before we get started, we have a few questions",
                losgehts: "let's go",
                whatlanguage: "What language do you speak?",
                howold: "How old are you?",
                buttonweiter: "further",
                interest: "How much interest do you have?",
                scholar: "Scholar",
                muser: "Muser",
                wanderer: "Wanderer",
                angetrieben: "Knowledge is the key. You would like to receive all information about the exhibition.",
                schnell: "You travel quickly and want to receive concise information and don't want to spend too much time in the museum.",
                wissen: "You are driven by your endless curiosity. You want to get a deeper insight.",
                zusammenfassend: "So, in summary",
                dubist: "You are",
                dusprichst: "You talk",
                jetztstarten: "Start now",
                dauerausstellung: "Permanent exhibition",
                dauerausstellung1: "With 2,000 objects from our collection, we tell the story in 3,000 square meters over 40,000 years of communication history - from Hand ax to smartphone.",
                dauerausstellung2: "Discover unique objects like the legendary Blue One Mauritius, the first telephone by Philipp Reis or the legendary Enigma cipher machine.",
                dauerausstellung3: "Send a letter by pneumatic post, send a telegram to Hamburg or present the news in our television studio. From smoke signals to pneumatic tubes to virtual messages: the Museum for Communication Berlin brings the topic of communication to life in a diverse and interactive way.",
                steinvonrosette: "The Rosetta Stone or Rosetta Stone, also known as the Rosetta Stone for short (Arabic حجر رشيد, DMG Ḥaǧar Rašīd, French pierre de Rosette, English Rosetta Stone) is the fragment of a stele from Memphis (Egypt) made of granodiorite and contains a multilingual synodal decree 196 B.C. BC from the time of the ancient Greek-Macedonian-Ptolemaic dynasty, created on behalf of King Ptolemy V Epiphanes, a successor of Alexander the Great. The Rosetta Stone was crucial in deciphering Egyptian hieroglyphs.",
            }
        },
        ch: {
            translation: {
                greeting: "你的个性化博物馆体验",
                explanation: "借助人工智能和增强现实，体验并与展品互动，如此前从未有过的方式",
                welcome: "歡迎",
                questions: "在開始之前，我們有幾個問題",
                losgehts: "我們走吧",
                whatlanguage: "你會講什麼語言?",
                howold: "你今年多大？",
                buttonweiter: "更遠",
                interest: "你有多感興趣?",
                scholar: "學者",
                muser: "使用者",
                wanderer: "流浪者",
                angetrieben: "知識是關鍵。您希望收到有關展覽的所有資訊。",
                schnell: "您的旅行速度很快，希望獲得簡潔的訊息，並且不想在博物館里花費太多時間。",
                wissen: "你被無盡的好奇心所驅使。您想要獲得更深入的見解。",
                zusammenfassend: "所以，總而言之",
                dubist: "你是",
                dusprichst: "你說話",
                jetztstarten: "現在開始",
                dauerausstellung: "常設展",
                dauerausstellung1: "我們用 3,000 字講述了我們收藏中的 2,000 件物品的故事 平方米 超過 40,000 年的通訊歷史 - 從 手斧到智慧型手機。",
            }

        }
    }
});
