import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Booster, Card, } from 'src/app/models/Booster';
import { Sets, Set } from 'src/app/models/Sets';
import { MtgService } from 'src/app/services/mtg.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {
  setsList: Set[] | undefined;
  errorToFoundBooster = false;
  creatureCards: Card[] = [
    {
       "name":"Those Who Serve",
       "manaCost":"{2}{W}",
       "cmc":3,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Zombie",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Zombie"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "flavor":"\"The dead perform all the work here—farming, building, teaching, even embalming their fellow mummies. The living need do nothing but train. What system could be more perfect?\"\n—Temmet, vizier of Naktamun",
       "artist":"Volkan Baǵa",
       "number":"32",
       "power":"2",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426734",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426734&type=card",
       "foreignNames":[
          {
             "name":"Die ewig Dienenden",
             "type":"Kreatur — Zombie",
             "flavor":"„Die Toten übernehmen sämtliche Arbeiten — auf den Feldern, im Haus, in den Schulen. Selbst die Einbalsamierung der anderen Verstorbenen. Die Lebenden müssen nichts tun, außer zu trainieren. Wie könnte es besser sein?\" —Temmet, Wesir von Naktamun",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427003&type=card",
             "language":"German",
             "multiverseid":427003
          },
          {
             "name":"Sirvientes",
             "type":"Criatura — Zombie",
             "flavor":"\"Aquí los muertos hacen todo el trabajo: cultivar, construir, instruir... incluso embalsamar a otras momias. Los vivos no necesitan hacer nada más que entrenar. ¿Qué sistema podría ser más perfecto?\" —Temmet, visir de Naktamun",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427272&type=card",
             "language":"Spanish",
             "multiverseid":427272
          },
          {
             "name":"Ceux qui servent",
             "type":"Créature : zombie",
             "flavor":"« Les morts font tout le travail ici : agriculture, construction, éducation et même embaumement des autres momies. Les vivants n'ont rien à faire, sinon s'entraîner. Quel système pourrait être plus parfait ? » —Temmet, vizir de Naktamon",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427541&type=card",
             "language":"French",
             "multiverseid":427541
          },
          {
             "name":"Coloro che Servono",
             "type":"Creatura — Zombie",
             "flavor":"\"Tutto il lavoro qui viene svolto dai morti, che coltivano, costruiscono edifici, insegnano e imbalsamano persino altre mummie. I vivi devono solo pensare ad addestrarsi. Un sistema più che ingegnoso!\" —Temmet, visir di Naktamun",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427810&type=card",
             "language":"Italian",
             "multiverseid":427810
          },
          {
             "name":"仕える者たち",
             "type":"クリーチャー — ゾンビ",
             "flavor":"「ここでは死者があらゆる仕事をする。耕作、建設、教育。仲間のミイラに不朽処理を行う者までいる。生者はそれを訓練するのみでよい。これ以上の仕組みがあるかね？」 ――ナクタムンの侍臣、テムメト",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428079&type=card",
             "language":"Japanese",
             "multiverseid":428079
          },
          {
             "name":"섬기는 자",
             "type":"생물 — 좀비",
             "flavor":"\"이곳에서는 망자들이 농사, 건설, 교육, 심지어 동료 미라의 방부처리까지 모든 일을 도맡는다. 산 자는 수련에만 집중한다. 이 얼마나 완벽한 시스템인가?\" —나크타문의 고관 테멧",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428348&type=card",
             "language":"Korean",
             "multiverseid":428348
          },
          {
             "name":"Aqueles que Servem",
             "type":"Criatura — Zumbi",
             "flavor":"\"Os mortos fazem todo o trabalho aqui: cultivo, construção, instrução, até mesmo o embalsamamento de suas companheiras múmias. Os vivos não precisam fazer nada, a não ser treinar. Que sistema poderia ser mais perfeito?\" — Temmet, vizir de Nactamon",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428617&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428617
          },
          {
             "name":"Те, Кто Служат",
             "type":"Существо — Зомби",
             "flavor":"«Мертвецы выполняют здесь всю работу: возделывают землю, строят, обучают, даже бальзамируют новых мумий. Живым остается лишь тренироваться. Возможна ли более совершенная система?» — Теммет, визирь Нактамуна",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428886&type=card",
             "language":"Russian",
             "multiverseid":428886
          },
          {
             "name":"奴隶木乃伊",
             "type":"生物～灵俑",
             "flavor":"「死者在这里负责所有的工作～耕种、建造、授课，甚至还为木乃伊同伴处理防腐。生者只管专心训练。还有更完美的体制吗？」 ～拿塔蒙维齐尔蒂穆特",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429155&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429155
          },
          {
             "name":"奴隸木乃伊",
             "type":"生物～殭屍",
             "flavor":"「死者在這裡負責所有的工作～耕種、建造、授課，甚至還為木乃伊同伴處理防腐。生者只管專心訓練。還有更完美的體制嗎？」 ～拿塔蒙維齊爾蒂穆特",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429424&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429424
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalType":"Creature - Zombie",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"dec041c3-42ab-5f10-9847-a74642b6cdcb"
    },
    {
       "name":"Thresher Lizard",
       "manaCost":"{2}{R}",
       "cmc":3,
       "colors":[
          "R"
       ],
       "colorIdentity":[
          "R"
       ],
       "type":"Creature — Lizard",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Lizard"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Thresher Lizard gets +1/+2 as long as you have one or fewer cards in hand.",
       "flavor":"The sound of its plated tail beating on desert rocks is often mistaken for the footfalls of a much larger predator.",
       "artist":"Craig J Spearing",
       "number":"150",
       "power":"3",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426852",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426852&type=card",
       "rulings":[
          {
             "date":"2018-03-16",
             "text":"Because damage remains marked on a creature until it’s removed as the turn ends, nonlethal damage dealt to Thresher Lizard while you have one or fewer cards in hand may become lethal if cards are put into your hand during that turn."
          }
       ],
       "foreignNames":[
          {
             "name":"Drescher-Eidechse",
             "text":"Die Drescher-Eidechse erhält +1/+2, solange du eine oder weniger Karten auf deiner Hand hast.",
             "type":"Kreatur — Eidechse",
             "flavor":"Der Lärm ihres gepanzerter Schwanzes, der auf die Wüstensteine schlägt, lässt viele die Ankunft eines weitaus größeren Raubtiers erwarten.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427121&type=card",
             "language":"German",
             "multiverseid":427121
          },
          {
             "name":"Lagarto trillador",
             "text":"El Lagarto trillador obtiene +1/+2 mientras tengas una carta o menos en tu mano.",
             "type":"Criatura — Lagarto",
             "flavor":"El sonido que produce su cola blindada al golpear contra las rocas del desierto suele confundirse con los pasos de un depredador mucho más grande.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427390&type=card",
             "language":"Spanish",
             "multiverseid":427390
          },
          {
             "name":"Lézard batteur",
             "text":"Le Lézard batteur gagne +1/+2 tant que vous avez une carte ou moins en main.",
             "type":"Créature : lézard",
             "flavor":"Le bruit de sa queue cuirassée battant les rochers du désert est souvent confondu avec celui des pas d'un prédateur bien plus gros.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427659&type=card",
             "language":"French",
             "multiverseid":427659
          },
          {
             "name":"Lucertola Trebbiatrice",
             "text":"La Lucertola Trebbiatrice prende +1/+2 fintanto che hai una o meno carte in mano.",
             "type":"Creatura — Lucertola",
             "flavor":"Il rumore della sua coda metallica che batte sulle rocce del deserto viene spesso confuso con i passi di un predatore molto più grande.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427928&type=card",
             "language":"Italian",
             "multiverseid":427928
          },
          {
             "name":"オナガトカゲ",
             "text":"あなたの手札のカードが１枚以下であるかぎり、オナガトカゲは＋１/＋２の修整を受ける。",
             "type":"クリーチャー — トカゲ",
             "flavor":"その鱗状の尾が砂漠の岩を打つ音は、大きな捕食者の足音と紛らわしい。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428197&type=card",
             "language":"Japanese",
             "multiverseid":428197
          },
          {
             "name":"타작 도마뱀",
             "text":"당신의 손에 있는 카드가 한 장 이하인 한, 타작 도마뱀은 +1/+2를 받는다.",
             "type":"생물 — 도마뱀",
             "flavor":"비늘로 덮인 꼬리가 사막 바위를 때리는 소리는 종종 거대 포식자의 발소리로 오해받는다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428466&type=card",
             "language":"Korean",
             "multiverseid":428466
          },
          {
             "name":"Lagarto-raposo",
             "text":"Lagarto-raposo recebe +1/+2 enquanto você tiver um card ou menos na mão.",
             "type":"Criatura — Lagarto",
             "flavor":"O som de sua cauda encouraçada batendo nas pedras do deserto é muitas vezes confundido com os passos de um predador muito maior.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428735&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428735
          },
          {
             "name":"Ящер-Молотильщик",
             "text":"Ящер-Молотильщик получает +1/+2, пока у вас в руке не больше одной карты.",
             "type":"Существо — Ящер",
             "flavor":"Стук его чешуйчатого хвоста по камням в пустыне легко спутать с топотом гораздо более крупного хищника.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429004&type=card",
             "language":"Russian",
             "multiverseid":429004
          },
          {
             "name":"扫尾蜥",
             "text":"只要你的手牌为一张或更少，扫尾蜥便得+1/+2。",
             "type":"生物～蜥蜴",
             "flavor":"它尾巴上有层层鳞甲，敲打砂岩时发出的声响常被当作大型捕食者的脚步声。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429273&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429273
          },
          {
             "name":"掃尾蜥",
             "text":"只要你的手牌為一張或更少，掃尾蜥便得+1/+2。",
             "type":"生物～蜥蜴",
             "flavor":"牠尾巴上有層層鱗甲，敲打砂岩時發出的聲響常被當作大型捕食者的腳步聲。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429542&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429542
          }
       ],
       "printings":[
          "A25",
          "AKH",
          "AKR",
          "MB1"
       ],
       "originalText":"Thresher Lizard gets +1/+2 as long as you have one or fewer cards in hand.",
       "originalType":"Creature - Lizard",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"d6928a9c-b908-5cf6-ae22-f4e6b8a58370"
    },
    {
       "name":"Tah-Crop Skirmisher",
       "manaCost":"{1}{U}",
       "cmc":2,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Naga Warrior",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Naga",
          "Warrior"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
       "flavor":"Initiates live and train with their crop, the unit that begins the trials together.",
       "artist":"Victor Adame Minguez",
       "number":"72",
       "power":"2",
       "toughness":"1",
       "layout":"normal",
       "multiverseid":"426774",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426774&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its converted mana cost is 0. These are copiable values of the token that other effects may copy."
          },
          {
             "date":"2017-04-18",
             "text":"For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token."
          },
          {
             "date":"2017-04-18",
             "text":"The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard."
          },
          {
             "date":"2017-07-14",
             "text":"If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so."
          },
          {
             "date":"2017-07-14",
             "text":"Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion."
          }
       ],
       "foreignNames":[
          {
             "name":"Plänklerin der Tah-Saat",
             "text":"Einbalsamieren {3}{U} ({3}{U}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er ein weißer Zombie-Naga-Krieger ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)",
             "type":"Kreatur — Naga, Krieger",
             "flavor":"Jeder Geweihte lebt und trainiert mit seiner Saat, mit der er später die Prüfungen ablegt.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427043&type=card",
             "language":"German",
             "multiverseid":427043
          },
          {
             "name":"Escaramuzadora de la simiente Tah",
             "text":"Embalsamar {3}{U}. ({3}{U}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Guerrero Naga Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)",
             "type":"Criatura — Guerrero naga",
             "flavor":"Los iniciados viven y entrenan con su simiente, la unidad que comienza unida las pruebas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427312&type=card",
             "language":"Spanish",
             "multiverseid":427312
          },
          {
             "name":"Assaillante de la moisson Tah",
             "text":"Embaumement {3}{U} ({3}{U}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et naga et guerrier blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
             "type":"Créature : naga et guerrier",
             "flavor":"Les adeptes vivent et s'entraînent avec leur moisson et commencent les épreuves en groupe.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427581&type=card",
             "language":"French",
             "multiverseid":427581
          },
          {
             "name":"Esploratrice della Messe Tah",
             "text":"Imbalsamare {3}{U} ({3}{U}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Guerriero Naga Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)",
             "type":"Creatura — Guerriero Naga",
             "flavor":"Gli iniziati vivono e si addestrano con la loro messe, l'unità con cui cominciano ad affrontare le ordalie.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427850&type=card",
             "language":"Italian",
             "multiverseid":427850
          },
          {
             "name":"ター一門の散兵",
             "text":"不朽{3}{U}（{3}{U}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・ナーガ・戦士であることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）",
             "type":"クリーチャー — ナーガ・戦士",
             "flavor":"修練者は一門で生活し訓練する。それが試練を共に始める仲間なのだ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428119&type=card",
             "language":"Japanese",
             "multiverseid":428119
          },
          {
             "name":"타 입문자 척후병",
             "text":"방부처리 {3}{U} ({3}{U}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 나가 전사다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)",
             "type":"생물 — 나가 전사",
             "flavor":"입회자들은 함께 시험을 시작하는 입문자와 같이 생활하고 수련한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428388&type=card",
             "language":"Korean",
             "multiverseid":428388
          },
          {
             "name":"Escaramuçadora da Safra Tah",
             "text":"Embalsamar {3}{U} ({3}{U}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Naga Guerreiro branco sem custo de mana. Embalsame somente como um feitiço.)",
             "type":"Criatura — Naga Guerreiro",
             "flavor":"Os iniciados vivem e treinam com sua safra, a unidade com a qual iniciam as provas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428657&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428657
          },
          {
             "name":"Боец Снопа Тах",
             "text":"Бальзамирование {3}{U} ({3}{U}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белым Зомби Нагой Воином без мана-стоимости. Бальзамируйте только как волшебство.)",
             "type":"Существо — Нага Воин",
             "flavor":"Послушники живут и упражняются вместе со своим снопом — группой, начавшей испытания вместе.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428926&type=card",
             "language":"Russian",
             "multiverseid":428926
          },
          {
             "name":"塔哈祀群侦卫",
             "text":"遗存{3}{U}（{3}{U}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／那伽／战士，且没有法术力费用。遗存的时机视同法术。）",
             "type":"生物～那伽／战士",
             "flavor":"一同踏上祀炼征途的人组成祀群，祀徒会跟自己的祀群一起生活、训练。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429195&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429195
          },
          {
             "name":"塔哈祀群偵衛",
             "text":"遺存{3}{U}（{3}{U}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／那伽／戰士，且沒有魔法力費用。遺存的時機視同巫術。）",
             "type":"生物～那伽／戰士",
             "flavor":"一同踏上祀煉征途的人組成祀群，祀徒會跟自己的祀群一起生活、訓練。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429464&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429464
          }
       ],
       "printings":[
          "AKH"
       ],
       "originalText":"Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
       "originalType":"Creature - Naga Warrior",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"52f64f13-6a66-5631-a80b-b5de2f26340c"
    },
    {
       "name":"Pouncing Cheetah",
       "manaCost":"{2}{G}",
       "cmc":3,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Cat",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Cat"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Flash",
       "flavor":"Rhonas's monument is home to a wider variety of creatures than anywhere else in the city of Naktamun—a feature most initiates fail to appreciate.",
       "artist":"Matt Stewart",
       "number":"179",
       "power":"3",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426881",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426881&type=card",
       "foreignNames":[
          {
             "name":"Pirschender Gepard",
             "text":"Aufblitzen",
             "type":"Kreatur — Katze",
             "flavor":"Rhonas' Monument ist ein Kaleidoskop der Artenvielfalt. Mehr als jeder andere Ort Naktamuns — was die wenigsten Geweihten zu schätzen wissen.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427150&type=card",
             "language":"German",
             "multiverseid":427150
          },
          {
             "name":"Guepardo al acecho",
             "text":"Destello.",
             "type":"Criatura — Felino",
             "flavor":"El Monumento a Rhonas alberga la mayor variedad de criaturas de toda la ciudad de Naktamun, una característica que la mayoría de iniciados no sabe apreciar.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427419&type=card",
             "language":"Spanish",
             "multiverseid":427419
          },
          {
             "name":"Guépard bondissant",
             "text":"Flash",
             "type":"Créature : chat",
             "flavor":"Le Monument de Rhonas abrite une diversité de créatures bien plus importante qu'ailleurs dans la ville de Naktamon, ce que peu d'adeptes apprécient à sa juste valeur.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427688&type=card",
             "language":"French",
             "multiverseid":427688
          },
          {
             "name":"Ghepardo Scattante",
             "text":"Lampo",
             "type":"Creatura — Felino",
             "flavor":"Il monumento a Rhonas ospita una grande varietà di creature, più di qualsiasi altro luogo della città di Naktamun: un pregio che ben pochi iniziati riescono ad apprezzare.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427957&type=card",
             "language":"Italian",
             "multiverseid":427957
          },
          {
             "name":"飛びかかるチーター",
             "text":"瞬速",
             "type":"クリーチャー — 猫",
             "flavor":"ロナスの碑は、ナクタムンの街中で一番の多様な生物の棲家となっている。修練者には迷惑だ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428226&type=card",
             "language":"Japanese",
             "multiverseid":428226
          },
          {
             "name":"달려드는 태세의 치타",
             "text":"섬광",
             "type":"생물 — 고양이",
             "flavor":"로나스 기념비에는 나크타문에서 가장 다양한 종류의 생물이 살고 있다. 대부분의 입회자들은 이걸 눈여겨보지 못한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428495&type=card",
             "language":"Korean",
             "multiverseid":428495
          },
          {
             "name":"Guepardo Saltador",
             "text":"Lampejo",
             "type":"Criatura — Felino",
             "flavor":"O monumento de Rhonas abriga uma variedade de criaturas maior que qualquer outro lugar na cidade de Nactamon —uma característica que a maioria dos iniciados não sabe apreciar.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428764&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428764
          },
          {
             "name":"Бросающийся Гепард",
             "text":"Миг",
             "type":"Существо — Кошка",
             "flavor":"В монументе Ронаса проживает больше разных существ, чем где бы то ни было в Нактамуне, но большинство послушников не способны оценить это по достоинству.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429033&type=card",
             "language":"Russian",
             "multiverseid":429033
          },
          {
             "name":"扑击捷豹",
             "text":"闪现",
             "type":"生物～猫",
             "flavor":"在罗纳斯纪念碑内栖息的生物种类，远比拿塔蒙城内其他地方要多～这一点许多祀徒都欣赏不来。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429302&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429302
          },
          {
             "name":"撲擊捷豹",
             "text":"閃現",
             "type":"生物～貓",
             "flavor":"在羅納斯紀念碑內棲息的生物種類，遠比拿塔蒙城內其他地方要多～這一點許多祀徒都欣賞不來。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429571&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429571
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "JMP",
          "MB1"
       ],
       "originalText":"Flash",
       "originalType":"Creature - Cat",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"8a6863cf-8b44-581f-8e29-670bd97e8fa1"
    },
    {
       "name":"Ornery Kudu",
       "manaCost":"{2}{G}",
       "cmc":3,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Antelope",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Antelope"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Ornery Kudu enters the battlefield, put a -1/-1 counter on target creature you control.",
       "flavor":"Debate rages among the viziers whether comparing the kudu's horns to the God-Pharaoh's is blasphemy or reverence.",
       "artist":"Deruchenko Alexander",
       "number":"178",
       "power":"3",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426880",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426880&type=card",
       "foreignNames":[
          {
             "name":"Störrisches Kudu",
             "text":"Wenn das Störrische Kudu ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.",
             "type":"Kreatur — Antilope",
             "flavor":"Unter den Wesiren herrscht Uneinigkeit darüber, ob der Vergleich von Kuduhörnern mit denen des Gott-Pharaos nun Blasphemie oder Ehrerbietung ist.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427149&type=card",
             "language":"German",
             "multiverseid":427149
          },
          {
             "name":"Kudú iracundo",
             "text":"Cuando el Kudú iracundo entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.",
             "type":"Criatura — Antílope",
             "flavor":"Existe un acalorado debate entre los visires sobre si comparar los cuernos del kudú al Dios Faraón es blasfemia o veneración.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427418&type=card",
             "language":"Spanish",
             "multiverseid":427418
          },
          {
             "name":"Koudou hargneux",
             "text":"Quand le Koudou hargneux arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.",
             "type":"Créature : antilope",
             "flavor":"Personne ne sait si comparer les cornes du koudou à celles du Dieu-Pharaon est un blasphème ou un signe de révérence, pas même les vizirs.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427687&type=card",
             "language":"French",
             "multiverseid":427687
          },
          {
             "name":"Kudu Irascibile",
             "text":"Quando il Kudu Irascibile entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.",
             "type":"Creatura — Antilope",
             "flavor":"C'è un acceso dibattito tra i visir: alcuni pensano che paragonare le corna del kudu a quelle del Dio Faraone sia blasfemo, altri credono che sia una forma di venerazione.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427956&type=card",
             "language":"Italian",
             "multiverseid":427956
          },
          {
             "name":"気性の荒いクーズー",
             "text":"気性の荒いクーズーが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。",
             "type":"クリーチャー — アンテロープ",
             "flavor":"クーズーの角を王神の角と比較するのは涜神にあたるかどうか、侍臣たちの間で論争が持ち上がっている。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428225&type=card",
             "language":"Japanese",
             "multiverseid":428225
          },
          {
             "name":"성질 더러운 쿠두",
             "text":"성질 더러운 쿠두가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.",
             "type":"생물 — 영양",
             "flavor":"쿠두의 뿔과 신 파라오의 뿔을 비교하는 게 신성모독인지 경배인지를 두고 고관들끼리 격론을 벌인다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428494&type=card",
             "language":"Korean",
             "multiverseid":428494
          },
          {
             "name":"Kudu Turrão",
             "text":"Quando Kudu Turrão entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.",
             "type":"Criatura — Antílope",
             "flavor":"Os vizires têm opiniões divergentes quanto à comparação dos chifres do kudu aos do Faraó-Deus. Alguns dizem que seja uma blasfêmia, outros uma forma de reverência.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428763&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428763
          },
          {
             "name":"Норовистый Куду",
             "text":"Когда Норовистый Куду выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.",
             "type":"Существо — Антилопа",
             "flavor":"Среди визирей не утихают споры о том, чем является сравнение рогов куду с рогами Бога-Фараона: богохульством или проявлением почтения.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429032&type=card",
             "language":"Russian",
             "multiverseid":429032
          },
          {
             "name":"暴躁捻角羚",
             "text":"当暴躁捻角羚进战场时，在目标由你操控的生物上放置一个-1/-1指示物。",
             "type":"生物～羚羊",
             "flavor":"拿法老神尊角与羚羊长角相提并论到底算是亵渎还是崇敬，诸位维齐尔激烈争辩，莫衷一是。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429301&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429301
          },
          {
             "name":"暴躁捻角羚",
             "text":"當暴躁捻角羚進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。",
             "type":"生物～羚羊",
             "flavor":"拿法老神尊角與羚羊長角相提並論到底算是褻瀆還是崇敬，諸位維齊爾激烈爭辯，莫衷一是。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429570&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429570
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Ornery Kudu enters the battlefield, put a -1/-1 counter on target creature you control.",
       "originalType":"Creature - Antelope",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"cc773e67-031f-5fa0-91fc-f6f315a5a322"
    },
    {
       "name":"Tah-Crop Skirmisher",
       "manaCost":"{1}{U}",
       "cmc":2,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Naga Warrior",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Naga",
          "Warrior"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
       "flavor":"Initiates live and train with their crop, the unit that begins the trials together.",
       "artist":"Victor Adame Minguez",
       "number":"72",
       "power":"2",
       "toughness":"1",
       "layout":"normal",
       "multiverseid":"426774",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426774&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its converted mana cost is 0. These are copiable values of the token that other effects may copy."
          },
          {
             "date":"2017-04-18",
             "text":"For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token."
          },
          {
             "date":"2017-04-18",
             "text":"The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard."
          },
          {
             "date":"2017-07-14",
             "text":"If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so."
          },
          {
             "date":"2017-07-14",
             "text":"Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion."
          }
       ],
       "foreignNames":[
          {
             "name":"Plänklerin der Tah-Saat",
             "text":"Einbalsamieren {3}{U} ({3}{U}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er ein weißer Zombie-Naga-Krieger ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)",
             "type":"Kreatur — Naga, Krieger",
             "flavor":"Jeder Geweihte lebt und trainiert mit seiner Saat, mit der er später die Prüfungen ablegt.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427043&type=card",
             "language":"German",
             "multiverseid":427043
          },
          {
             "name":"Escaramuzadora de la simiente Tah",
             "text":"Embalsamar {3}{U}. ({3}{U}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Guerrero Naga Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)",
             "type":"Criatura — Guerrero naga",
             "flavor":"Los iniciados viven y entrenan con su simiente, la unidad que comienza unida las pruebas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427312&type=card",
             "language":"Spanish",
             "multiverseid":427312
          },
          {
             "name":"Assaillante de la moisson Tah",
             "text":"Embaumement {3}{U} ({3}{U}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et naga et guerrier blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
             "type":"Créature : naga et guerrier",
             "flavor":"Les adeptes vivent et s'entraînent avec leur moisson et commencent les épreuves en groupe.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427581&type=card",
             "language":"French",
             "multiverseid":427581
          },
          {
             "name":"Esploratrice della Messe Tah",
             "text":"Imbalsamare {3}{U} ({3}{U}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Guerriero Naga Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)",
             "type":"Creatura — Guerriero Naga",
             "flavor":"Gli iniziati vivono e si addestrano con la loro messe, l'unità con cui cominciano ad affrontare le ordalie.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427850&type=card",
             "language":"Italian",
             "multiverseid":427850
          },
          {
             "name":"ター一門の散兵",
             "text":"不朽{3}{U}（{3}{U}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・ナーガ・戦士であることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）",
             "type":"クリーチャー — ナーガ・戦士",
             "flavor":"修練者は一門で生活し訓練する。それが試練を共に始める仲間なのだ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428119&type=card",
             "language":"Japanese",
             "multiverseid":428119
          },
          {
             "name":"타 입문자 척후병",
             "text":"방부처리 {3}{U} ({3}{U}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 나가 전사다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)",
             "type":"생물 — 나가 전사",
             "flavor":"입회자들은 함께 시험을 시작하는 입문자와 같이 생활하고 수련한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428388&type=card",
             "language":"Korean",
             "multiverseid":428388
          },
          {
             "name":"Escaramuçadora da Safra Tah",
             "text":"Embalsamar {3}{U} ({3}{U}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Naga Guerreiro branco sem custo de mana. Embalsame somente como um feitiço.)",
             "type":"Criatura — Naga Guerreiro",
             "flavor":"Os iniciados vivem e treinam com sua safra, a unidade com a qual iniciam as provas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428657&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428657
          },
          {
             "name":"Боец Снопа Тах",
             "text":"Бальзамирование {3}{U} ({3}{U}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белым Зомби Нагой Воином без мана-стоимости. Бальзамируйте только как волшебство.)",
             "type":"Существо — Нага Воин",
             "flavor":"Послушники живут и упражняются вместе со своим снопом — группой, начавшей испытания вместе.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428926&type=card",
             "language":"Russian",
             "multiverseid":428926
          },
          {
             "name":"塔哈祀群侦卫",
             "text":"遗存{3}{U}（{3}{U}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／那伽／战士，且没有法术力费用。遗存的时机视同法术。）",
             "type":"生物～那伽／战士",
             "flavor":"一同踏上祀炼征途的人组成祀群，祀徒会跟自己的祀群一起生活、训练。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429195&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429195
          },
          {
             "name":"塔哈祀群偵衛",
             "text":"遺存{3}{U}（{3}{U}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／那伽／戰士，且沒有魔法力費用。遺存的時機視同巫術。）",
             "type":"生物～那伽／戰士",
             "flavor":"一同踏上祀煉征途的人組成祀群，祀徒會跟自己的祀群一起生活、訓練。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429464&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429464
          }
       ],
       "printings":[
          "AKH"
       ],
       "originalText":"Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
       "originalType":"Creature - Naga Warrior",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"52f64f13-6a66-5631-a80b-b5de2f26340c"
    },
    {
       "name":"Gust Walker",
       "manaCost":"{1}{W}",
       "cmc":2,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Human Wizard",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human",
          "Wizard"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
       "flavor":"\"I'm never unarmed.\"",
       "artist":"Jason Rainville",
       "number":"17",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426719",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426719&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature."
          },
          {
             "date":"2017-04-18",
             "text":"If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything."
          },
          {
             "date":"2017-04-18",
             "text":"If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step."
          },
          {
             "date":"2017-04-18",
             "text":"All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared."
          }
       ],
       "foreignNames":[
          {
             "name":"Böenwanderer",
             "text":"Du kannst den Böenwanderer erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +1/+1 und Flugfähigkeit bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)",
             "type":"Kreatur — Mensch, Zauberer",
             "flavor":"„Ich trage vielleicht keine Waffen, aber ich bin niemals unbewaffnet.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426988&type=card",
             "language":"German",
             "multiverseid":426988
          },
          {
             "name":"Caminavientos",
             "text":"Puedes espolear al Caminavientos en cuanto ataque. Cuando lo hagas, obtiene +1/+1 y gana la habilidad de volar hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)",
             "type":"Criatura — Hechicero humano",
             "flavor":"\"Nunca voy desarmado\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427257&type=card",
             "language":"Spanish",
             "multiverseid":427257
          },
          {
             "name":"Marcheur des rafales",
             "text":"Vous pouvez surmener le Marcheur des rafales au moment où il attaque. Quand vous faites ainsi, il gagne +1/+1 et acquiert le vol jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
             "type":"Créature : humain et sorcier",
             "flavor":"« Je ne suis jamais désarmé. »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427526&type=card",
             "language":"French",
             "multiverseid":427526
          },
          {
             "name":"Calcaraffiche",
             "text":"Puoi stremare il Calcaraffiche mentre attacca. Quando lo fai, prende +1/+1 e ha volare fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
             "type":"Creatura — Mago Umano",
             "flavor":"\"Non sono mai disarmato.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427795&type=card",
             "language":"Italian",
             "multiverseid":427795
          },
          {
             "name":"突風歩き",
             "text":"突風歩きが攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋１/＋１の修整を受けるとともに飛行を得る。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）",
             "type":"クリーチャー — 人間・ウィザード",
             "flavor":"「私が丸腰でいることはない。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428064&type=card",
             "language":"Japanese",
             "multiverseid":428064
          },
          {
             "name":"질풍 보행자",
             "text":"당신은 질풍 보행자로 공격을 선언하면서 질풍 보행자를 분전시킬 수 있다. 그렇게 할 때, 질풍 보행자는 턴종료까지 +1/+1을 받고 비행을 얻는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)",
             "type":"생물 — 인간 마법사",
             "flavor":"\"난 언제나 방비 상태야.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428333&type=card",
             "language":"Korean",
             "multiverseid":428333
          },
          {
             "name":"Caminhante das Rajadas",
             "text":"Você pode exaurir Caminhante das Rajadas conforme ele ataca. Quando você faz isso, ele recebe +1/+1 e ganha voar até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)",
             "type":"Criatura — Humano Mago",
             "flavor":"\"Eu nunca estou desarmado.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428602&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428602
          },
          {
             "name":"Путник Ветра",
             "text":"Вы можете подстегнуть Путника Ветра в момент его атаки. Когда вы это делаете, он получает +1/+1 и Полет до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)",
             "type":"Существо — Человек Чародей",
             "flavor":"«Я никогда не бываю без оружия».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428871&type=card",
             "language":"Russian",
             "multiverseid":428871
          },
          {
             "name":"踏风客",
             "text":"你可以于踏风客攻击时耗竭之。当你如此作时，直到回合结束，它得+1/+1且获得飞行异能。（已耗竭的生物于你的下一个重置步骤中不能重置。）",
             "type":"生物～人类／法术师",
             "flavor":"「我永远不会缺武器用。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429140&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429140
          },
          {
             "name":"踏風客",
             "text":"你可以於踏風客攻擊時耗竭之。當你如此作時，直到回合結束，它得+1/+1且獲得飛行異能。（已耗竭的生物於你的下一個重置步驟中不能重置。）",
             "type":"生物～人類／魔法師",
             "flavor":"「我永遠不會缺武器用。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429409&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429409
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "MB1"
       ],
       "originalText":"You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
       "originalType":"Creature - Human Wizard",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"c5c0d76d-90a0-5b21-b73a-10de83a321c9"
    },
    {
       "name":"Naga Oracle",
       "manaCost":"{3}{U}",
       "cmc":4,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Naga Cleric",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Naga",
          "Cleric"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Naga Oracle enters the battlefield, surveil 3. (Look at the top three cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)",
       "flavor":"\"All questions will be answered during the Hour of Revelation.\"",
       "artist":"Deruchenko Alexander",
       "number":"62",
       "power":"2",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426764",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426764&type=card",
       "foreignNames":[
          {
             "name":"Naga-Orakel",
             "text":"Wenn das Naga-Orakel ins Spiel kommt, schaue dir die obersten drei Karten deiner Bibliothek an. Lege eine beliebige Anzahl davon auf deinen Friedhof und den Rest in beliebiger Reihenfolge oben auf deine Bibliothek.",
             "type":"Kreatur — Naga, Kleriker",
             "flavor":"„Alle unsere Fragen werden in der Stunde der Offenbarung beantwortet werden.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427033&type=card",
             "language":"German",
             "multiverseid":427033
          },
          {
             "name":"Oráculo naga",
             "text":"Cuando el Oráculo naga entre al campo de batalla, mira las tres primeras cartas de tu biblioteca. Pon cualquier cantidad de ellas en tu cementerio y el resto en la parte superior de tu biblioteca en cualquier orden.",
             "type":"Criatura — Clérigo naga",
             "flavor":"\"Todas las preguntas tendrán su respuesta en la Hora de la Revelación.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427302&type=card",
             "language":"Spanish",
             "multiverseid":427302
          },
          {
             "name":"Oracle naga",
             "text":"Quand l'Oracle naga arrive sur le champ de bataille, regardez les trois cartes du dessus de votre bibliothèque. Mettez n'importe quel nombre d'entre elles dans votre cimetière et remettez ensuite le reste au-dessus de votre bibliothèque, dans l'ordre de votre choix.",
             "type":"Créature : naga et clerc",
             "flavor":"« Les réponses à toutes vos questions seront révélées à l'Âge de la Révélation. »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427571&type=card",
             "language":"French",
             "multiverseid":427571
          },
          {
             "name":"Oracolo Naga",
             "text":"Quando l'Oracolo Naga entra nel campo di battaglia, guarda le prime tre carte del tuo grimorio. Mettine un qualsiasi numero nel tuo cimitero e le altre in cima al tuo grimorio in qualsiasi ordine.",
             "type":"Creatura — Chierico Naga",
             "flavor":"\"Tutte le domande troveranno risposta nell'Era della rivelazione.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427840&type=card",
             "language":"Italian",
             "multiverseid":427840
          },
          {
             "name":"ナーガの神託者",
             "text":"ナーガの神託者が戦場に出たとき、あなたのライブラリーの一番上からカードを３枚見る。そのうちの望む枚数をあなたの墓地に置き、残りをあなたのライブラリーの一番上に望む順番で戻す。",
             "type":"クリーチャー — ナーガ・クレリック",
             "flavor":"「すべての疑問は、啓示の刻に解けるだろう。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428109&type=card",
             "language":"Japanese",
             "multiverseid":428109
          },
          {
             "name":"나가 예언자",
             "text":"나가 예언자가 전장에 들어올 때, 당신의 서고 맨 위의 카드 세 장을 본다. 그중 원하는 만큼을 당신의 무덤에 넣고 나머지 카드들은 당신의 서고 맨 위에 원하는 순서로 놓는다.",
             "type":"생물 — 나가 성직자",
             "flavor":"\"계시의 시간 동안 모든 질문에 대한 답을 얻을 수 있다.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428378&type=card",
             "language":"Korean",
             "multiverseid":428378
          },
          {
             "name":"Oráculo Naga",
             "text":"Quando Oráculo Naga entrar no campo de batalha, olhe os três cards do topo de seu grimório. Coloque qualquer quantidade deles no seu cemitério e o restante no topo do seu grimório em qualquer ordem.",
             "type":"Criatura — Naga Clérigo",
             "flavor":"\"Todas as perguntas serão respondidas durante a Hora da Revelação.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428647&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428647
          },
          {
             "name":"Нага-Оракул",
             "text":"Когда Нага-Оракул выходит на поле битвы, посмотрите три верхние карты вашей библиотеки. Положите любое количество из них на ваше кладбище, а остальные — обратно на верх вашей библиотеки в любом порядке.",
             "type":"Существо — Нага Священник",
             "flavor":"«Час Откровения даст ответ на все вопросы».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428916&type=card",
             "language":"Russian",
             "multiverseid":428916
          },
          {
             "name":"那伽先知",
             "text":"当那伽先知进战场时，检视你牌库顶的三张牌。将其中任意数量的牌置入你的坟墓场，其余则以任意顺序放回你的牌库顶。",
             "type":"生物～那伽／僧侣",
             "flavor":"「所有疑问都将在预示时刻得到解答。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429185&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429185
          },
          {
             "name":"那伽先知",
             "text":"當那伽先知進戰場時，檢視你牌庫頂的三張牌。將其中任意數量的牌置入你的墳墓場，其餘則以任意順序放回你的牌庫頂。",
             "type":"生物～那伽／僧侶",
             "flavor":"「所有疑問都將在預示時刻得到解答。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429454&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429454
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Naga Oracle enters the battlefield, look at the top three cards of your library. Put any number of them into your graveyard and the rest back on top of your library in any order.",
       "originalType":"Creature - Naga Cleric",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"323f6f74-f5aa-5c9f-8f09-1121d495a701"
    },
    {
       "name":"Tattered Mummy",
       "manaCost":"{1}{B}",
       "cmc":2,
       "colors":[
          "B"
       ],
       "colorIdentity":[
          "B"
       ],
       "type":"Creature — Zombie Jackal",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Zombie",
          "Jackal"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Tattered Mummy dies, each opponent loses 2 life.",
       "flavor":"The dead who wander beyond the safety of the city crave only to spread their curse.",
       "artist":"Slawomir Maniak",
       "number":"278",
       "power":"1",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"429670",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429670&type=card",
       "rulings":[
          {
             "date":"2018-07-13",
             "text":"If your life total is brought to 0 or less at the same time that Tattered Mummy is dealt lethal damage, you lose the game before its triggered ability goes on the stack."
          },
          {
             "date":"2018-07-13",
             "text":"In a Two-Headed Giant game, the triggered ability of Tattered Mummy causes the opposing team to lose 4 life."
          }
       ],
       "foreignNames":[
          {
             "name":"Zerlumpte Mumie",
             "text":"Wenn die Zerlumpte Mumie stirbt, verliert jeder Gegner 2 Lebenspunkte.",
             "type":"Kreatur — Zombie, Schakal",
             "flavor":"Die Toten, die außerhalb der Mauern der Stadt umherwandern, haben nur noch den Wunsch, ihren Fluch weiterzugeben.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429724&type=card",
             "language":"German",
             "multiverseid":429724
          },
          {
             "name":"Momia andrajosa",
             "text":"Cuando la Momia andrajosa muera, cada oponente pierde 2 vidas.",
             "type":"Criatura — Chacal zombie",
             "flavor":"Los muertos que se alejan de la seguridad de la ciudad solo buscan esparcir su maldición.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429850&type=card",
             "language":"Spanish",
             "multiverseid":429850
          },
          {
             "name":"Momie en lambeaux",
             "text":"Quand la Momie en lambeaux meurt, chaque adversaire perd 2 points de vie.",
             "type":"Créature : zombie et chacal",
             "flavor":"Les morts qui s'aventurent par-delà les murs protecteurs de la ville ne cherchent qu'à répandre leur malédiction.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429742&type=card",
             "language":"French",
             "multiverseid":429742
          },
          {
             "name":"Mummia Lacera",
             "text":"Quando la Mummia Lacera muore, ogni avversario perde 2 punti vita.",
             "type":"Creatura — Sciacallo Zombie",
             "flavor":"I morti che abbandonano la sicurezza della città bramano solo diffondere la propria maledizione.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429760&type=card",
             "language":"Italian",
             "multiverseid":429760
          },
          {
             "name":"ぼろぼろのミイラ",
             "text":"ぼろぼろのミイラが死亡したとき、各対戦相手はそれぞれ２点のライフを失う。",
             "type":"クリーチャー — ゾンビ・ジャッカル",
             "flavor":"安全な街の外をうろつく死者たちは、自身の呪いを広めることのみを渇望する。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429778&type=card",
             "language":"Japanese",
             "multiverseid":429778
          },
          {
             "name":"넝마 미라",
             "text":"넝마 미라가 죽을 때, 각 상대는 생명 2점을 잃는다.",
             "type":"생물 — 좀비 자칼",
             "flavor":"안전한 도시를 벗어나 배회하는 망자에게는 오직 저주를 퍼뜨리려는 욕망만이 남아 있다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429796&type=card",
             "language":"Korean",
             "multiverseid":429796
          },
          {
             "name":"Múmia Esfarrapada",
             "text":"Quando Múmia Esfarrapada morre, cada oponente perde 2 pontos de vida.",
             "type":"Criatura — Zumbi Chacal",
             "flavor":"Os mortos que vagam além da segurança da cidade desejam apenas propagar sua maldição.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429814&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":429814
          },
          {
             "name":"Растрепанная Мумия",
             "text":"Когда Растрепанная Мумия умирает, каждый оппонент теряет 2 жизни.",
             "type":"Существо — Зомби Шакал",
             "flavor":"Мертвецы, бродящие за безопасными пределами города, жаждут лишь заразить других своим проклятьем.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429832&type=card",
             "language":"Russian",
             "multiverseid":429832
          },
          {
             "name":"褴褛木乃伊",
             "text":"当褴褛木乃伊死去时，每位对手各失去2点生命。",
             "type":"生物～灵俑 ／豺狼",
             "flavor":"他们死后漂浪在城市护帘之外，唯愿能有更多的人遭受这般诅咒。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429688&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429688
          },
          {
             "name":"襤褸木乃伊",
             "text":"當襤褸木乃伊死去時，每位對手各失去2點生命。",
             "type":"生物～殭屍 ／豺狼",
             "flavor":"他們死後漂浪在城市護簾之外，唯願能有更多的人遭受這般詛咒。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429706&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429706
          }
       ],
       "printings":[
          "AKH",
          "GN2",
          "GNT",
          "M19"
       ],
       "originalText":"When Tattered Mummy dies, each opponent loses 2 life.",
       "originalType":"Creature — Zombie Jackal",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"2ef18e21-8b43-547c-b21f-da0b080f1078"
    },
    {
       "name":"Hekma Sentinels",
       "manaCost":"{2}{U}",
       "cmc":3,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Human Cleric",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human",
          "Cleric"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Whenever you cycle or discard a card, Hekma Sentinels gets +1/+1 until end of turn.",
       "flavor":"\"The God-Pharaoh created the Hekma to protect us from the horrors beyond and to surround us in his love.\"",
       "artist":"James Ryman",
       "number":"56",
       "power":"2",
       "toughness":"3",
       "layout":"normal",
       "multiverseid":"426758",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426758&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"Some cards have an ability that triggers whenever you cycle any card. These triggered abilities resolve before you draw from the cycling ability."
          },
          {
             "date":"2017-04-18",
             "text":"An ability that triggers whenever you discard a card doesn’t give you permission to discard cards. You’ll need another effect that instructs or allows you to discard them."
          },
          {
             "date":"2017-04-18",
             "text":"An ability that triggers whenever you “cycle or discard” a card triggers only once if you cycle a card. The ability “Whenever you discard a card” is functionally identical to this ability; cycling is mentioned for clarity."
          },
          {
             "date":"2017-04-18",
             "text":"If a player discards a card during their cleanup step due to having too many cards in hand, any appropriate abilities that trigger on discarding that card trigger. If this happens, those triggered abilities are put onto the stack and players receive priority in that cleanup step to cast spells or activate abilities (normally, no players may take actions during a cleanup step). Another cleanup step is created following that one."
          }
       ],
       "foreignNames":[
          {
             "name":"Hekma-Wachposten",
             "text":"Immer wenn du eine Karte umwandelst oder abwirfst, erhalten die Hekma-Wachposten +1/+1 bis zum Ende des Zuges.",
             "type":"Kreatur — Mensch, Kleriker",
             "flavor":"„Das Hekma ist die liebende Umarmung des Gott-Pharaos, die uns vor den Schrecken der Außenwelt schützt.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427027&type=card",
             "language":"German",
             "multiverseid":427027
          },
          {
             "name":"Centinelas de la Hekma",
             "text":"Siempre que actives una habilidad de ciclo o descartes una carta, los Centinelas de la Hekma obtienen +1/+1 hasta el final del turno.",
             "type":"Criatura — Clérigo humano",
             "flavor":"\"El Dios Faraón creó la Hekma para protegernos de los horrores que hay más allá y rodearnos con su amor\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427296&type=card",
             "language":"Spanish",
             "multiverseid":427296
          },
          {
             "name":"Sentinelles de l'Hekma",
             "text":"À chaque fois que vous recyclez ou vous défaussez d'une carte, les Sentinelles de l'Hekma gagnent +1/+1 jusqu'à la fin du tour.",
             "type":"Créature : humain et clerc",
             "flavor":"« Le Dieu-Pharaon a créé l'Hekma pour nous protéger des horreurs qui se trouvent au-delà, et pour nous entourer de son amour. »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427565&type=card",
             "language":"French",
             "multiverseid":427565
          },
          {
             "name":"Sentinelle dell'Hekma",
             "text":"Ogniqualvolta cicli o scarti una carta, le Sentinelle dell'Hekma prendono +1/+1 fino alla fine del turno.",
             "type":"Creatura — Chierico Umano",
             "flavor":"\"Il Dio Faraone ha creato l'Hekma per proteggerci dagli orrori che vagano oltre la barriera e per circondarci del suo amore.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427834&type=card",
             "language":"Italian",
             "multiverseid":427834
          },
          {
             "name":"ヘクマの歩哨",
             "text":"あなたがカードを１枚サイクリングするか捨てるたび、ターン終了時まで、ヘクマの歩哨は＋１/＋１の修整を受ける。",
             "type":"クリーチャー — 人間・クレリック",
             "flavor":"「王神はヘクマをお造りになり、その外の恐怖の怪物から我々をお守りくださるとともに、その愛で我々を包み込んでくださったのです。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428103&type=card",
             "language":"Japanese",
             "multiverseid":428103
          },
          {
             "name":"헤크마 보초",
             "text":"당신이 카드를 순환하거나 버릴 때마다, 헤크마 보초는 턴종료까지 +1/+1을 받는다.",
             "type":"생물 — 인간 성직자",
             "flavor":"\"신 파라오는 헤크마를 창조하시어 우리를 괴수들로부터 보호하고 우리에게 은총을 베푸셨다.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428372&type=card",
             "language":"Korean",
             "multiverseid":428372
          },
          {
             "name":"Sentinelas da Hekma",
             "text":"Toda vez que você recicla ou descarta um card, Sentinelas da Hekma recebe +1/+1 até o final do turno.",
             "type":"Criatura — Humano Clérigo",
             "flavor":"\"O Faraó-Deus criou a Hekma para nos proteger dos horrores além e para nos envolver em seu amor.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428641&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428641
          },
          {
             "name":"Стражники Хекмы",
             "text":"Каждый раз, когда вы совершаете Цикл или сбрасываете карту, Стражники Хекмы получают +1/+1 до конца хода.",
             "type":"Существо — Человек Священник",
             "flavor":"«Бог-Фараон создал Хекму, чтобы защитить нас от ужасов пустошей и окружить своей любовью».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428910&type=card",
             "language":"Russian",
             "multiverseid":428910
          },
          {
             "name":"避世帘哨卫",
             "text":"每当你循环或弃一张牌时，避世帘哨卫得+1/+1直到回合结束。",
             "type":"生物～人类／僧侣",
             "flavor":"「法老神架起避世帘保护我们不受外界邪物的侵扰，将我们笼罩在他的关爱之下。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429179&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429179
          },
          {
             "name":"避世簾哨兵",
             "text":"每當你循環或棄一張牌時，避世簾哨兵得+1/+1直到回合結束。",
             "type":"生物～人類／僧侶",
             "flavor":"「法老神架起避世簾保護我們不受外界邪物的侵擾，將我們籠罩在他的關愛之下。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429448&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429448
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"Whenever you cycle or discard a card, Hekma Sentinels gets +1/+1 until end of turn.",
       "originalType":"Creature - Human Cleric",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"eae49f2f-7d5a-570c-b461-e71224683997"
    },
    {
       "name":"Bitterblade Warrior",
       "manaCost":"{1}{G}",
       "cmc":2,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Jackal Warrior",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Jackal",
          "Warrior"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"You may exert Bitterblade Warrior as it attacks. When you do, it gets +1/+0 and gains deathtouch until end of turn. (An exerted creature won't untap during your next untap step.)",
       "flavor":"\"The vizier of poisons teaches an unconventional kind of strength.\"",
       "artist":"Slawomir Maniak",
       "number":"157",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426859",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426859&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature."
          },
          {
             "date":"2017-04-18",
             "text":"If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything."
          },
          {
             "date":"2017-04-18",
             "text":"If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step."
          },
          {
             "date":"2017-04-18",
             "text":"All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared."
          }
       ],
       "foreignNames":[
          {
             "name":"Bitterklingenkämpfer",
             "text":"Du kannst den Bitterklingenkämpfer erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +1/+0 und Todesberührung bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)",
             "type":"Kreatur — Schakal, Krieger",
             "flavor":"„Die Wesirin der Gifte lehrt eine eher unkonventionelle Art zu kämpfen.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427128&type=card",
             "language":"German",
             "multiverseid":427128
          },
          {
             "name":"Guerrero filoamargo",
             "text":"Puedes espolear al Guerrero filoamargo en cuanto ataque. Cuando lo hagas, obtiene +1/+0 y gana la habilidad de toque mortal hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)",
             "type":"Criatura — Guerrero chacal",
             "flavor":"\"La visir de los venenos instruye un tipo de fuerza poco convencional\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427397&type=card",
             "language":"Spanish",
             "multiverseid":427397
          },
          {
             "name":"Guerrier âprelame",
             "text":"Vous pouvez surmener le Guerrier âprelame au moment où il attaque. Quand vous faites ainsi, il gagne +1/+0 et acquiert le contact mortel jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
             "type":"Créature : chacal et guerrier",
             "flavor":"« Le vizir des poisons enseigne une forme de force peu conventionnelle. »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427666&type=card",
             "language":"French",
             "multiverseid":427666
          },
          {
             "name":"Guerriero Aspralama",
             "text":"Puoi stremare il Guerriero Aspralama mentre attacca. Quando lo fai, prende +1/+0 e ha tocco letale fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
             "type":"Creatura — Guerriero Sciacallo",
             "flavor":"\"La visir dei veleni insegna a padroneggiare un tipo di forza poco convenzionale.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427935&type=card",
             "language":"Italian",
             "multiverseid":427935
          },
          {
             "name":"苦刃の戦士",
             "text":"苦刃の戦士が攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋１/＋０の修整を受けるとともに接死を得る。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）",
             "type":"クリーチャー — ジャッカル・戦士",
             "flavor":"「毒物の侍臣は伝統的なものとは異なる形の強さを教える。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428204&type=card",
             "language":"Japanese",
             "multiverseid":428204
          },
          {
             "name":"맹독검 전사",
             "text":"당신은 맹독검 전사로 공격을 선언하면서 맹독검 전사를 분전시킬 수 있다. 그렇게 할 때, 맹독검 전사는 턴종료까지 +1/+0을 받고 치명타를 얻는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)",
             "type":"생물 — 자칼 전사",
             "flavor":"\"독의 고관들은 새로운 유형의 힘을 가르친다.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428473&type=card",
             "language":"Korean",
             "multiverseid":428473
          },
          {
             "name":"Guerreiro Laminamarga",
             "text":"Você pode exaurir Guerreiro Laminamarga conforme ele ataca. Quando você faz isso, ele recebe +1/+0 e ganha toque mortífero até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)",
             "type":"Criatura — Chacal Guerreiro",
             "flavor":"\"A vizir das poções ensina um tipo não convencional de força.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428742&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428742
          },
          {
             "name":"Воин Клинка Горечи",
             "text":"Вы можете подстегнуть Воина Клинка Горечи в момент его атаки. Когда вы это делаете, он получает +1/+0 и Смертельное касание до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)",
             "type":"Существо — Шакал Воин",
             "flavor":"«Визирь ядов учит той силе, что привычна немногим».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429011&type=card",
             "language":"Russian",
             "multiverseid":429011
          },
          {
             "name":"毒刃战士",
             "text":"你可以于毒刃战士攻击时耗竭之。当你如此作时，直到回合结束，它得+1/+0且获得死触异能。（已耗竭的生物于你的下一个重置步骤中不能重置。）",
             "type":"生物～豺狼／战士",
             "flavor":"「司毒维齐尔授人以非比寻常的力量。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429280&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429280
          },
          {
             "name":"毒刃戰士",
             "text":"你可以於毒刃戰士攻擊時耗竭之。當你如此作時，直到回合結束，它得+1/+0且獲得死觸異能。（已耗竭的生物於你的下一個重置步驟中不能重置。）",
             "type":"生物～豺狼／戰士",
             "flavor":"「司毒維齊爾授人以非比尋常的力量。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429549&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429549
          }
       ],
       "printings":[
          "AKH",
          "MB1"
       ],
       "originalText":"You may exert Bitterblade Warrior as it attacks. When you do, it gets +1/+0 and gains deathtouch until end of turn. (An exerted creature won't untap during your next untap step.)",
       "originalType":"Creature - Jackal Warrior",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"68168d37-a913-59e3-b644-d732fa18b0ab"
    },
    {
       "name":"Fan Bearer",
       "manaCost":"{W}",
       "cmc":1,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Zombie",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Zombie"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"{2}, {T}: Tap target creature.",
       "flavor":"Rest sometimes requires the right prompting.",
       "artist":"Anthony Palumbo",
       "number":"12",
       "power":"1",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426714",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426714&type=card",
       "foreignNames":[
          {
             "name":"Fächerträger",
             "text":"{2}, {T}: Tappe eine Kreatur deiner Wahl.",
             "type":"Kreatur — Zombie",
             "flavor":"Manch einer muss zu seinem Glück gezwungen werden.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426983&type=card",
             "language":"German",
             "multiverseid":426983
          },
          {
             "name":"Abanicador",
             "text":"{2}, {T}: Gira la criatura objetivo.",
             "type":"Criatura — Zombie",
             "flavor":"El descanso a veces requiere de la persuasión adecuada.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427252&type=card",
             "language":"Spanish",
             "multiverseid":427252
          },
          {
             "name":"Flabellifère",
             "text":"{2}, {T} : Engagez la créature ciblée.",
             "type":"Créature : zombie",
             "flavor":"Une exhortation au repos est parfois nécessaire.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427521&type=card",
             "language":"French",
             "multiverseid":427521
          },
          {
             "name":"Agitatore di Ventaglio",
             "text":"{2}, {T}: TAPpa una creatura bersaglio.",
             "type":"Creatura — Zombie",
             "flavor":"Talvolta il riposo richiede un incoraggiamento.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427790&type=card",
             "language":"Italian",
             "multiverseid":427790
          },
          {
             "name":"扇持ち",
             "text":"{2}, {T}：クリーチャー１体を対象とし、それをタップする。",
             "type":"クリーチャー — ゾンビ",
             "flavor":"休息には適切なきっかけが必要である。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428059&type=card",
             "language":"Japanese",
             "multiverseid":428059
          },
          {
             "name":"부채 운반자",
             "text":"{2}, {T}: 생물을 목표로 정한다. 그 생물을 탭한다.",
             "type":"생물 — 좀비",
             "flavor":"휴식은 때때로 올바른 자극을 필요로 한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428328&type=card",
             "language":"Korean",
             "multiverseid":428328
          },
          {
             "name":"Porta-leques",
             "text":"{2}, {T}: Vire a criatura alvo.",
             "type":"Criatura — Zumbi",
             "flavor":"Algumas vezes precisamos do incentivo certo para descansar.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428597&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428597
          },
          {
             "name":"Носитель Опахала",
             "text":"{2}, {T}: поверните целевое существо.",
             "type":"Существо — Зомби",
             "flavor":"Для отдыха порой не обойтись без веских доводов.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428866&type=card",
             "language":"Russian",
             "multiverseid":428866
          },
          {
             "name":"执扇木乃伊",
             "text":"{2}，{T}：横置目标生物。",
             "type":"生物～灵俑",
             "flavor":"有时需要适当的推动才能安息。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429135&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429135
          },
          {
             "name":"執扇木乃伊",
             "text":"{2}，{T}：橫置目標生物。",
             "type":"生物～殭屍",
             "flavor":"有時需要適當的推動才能安息。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429404&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429404
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "GNT"
       ],
       "originalText":"{2}, {T}: Tap target creature.",
       "originalType":"Creature - Zombie",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"71eb6d19-3d57-5181-8fc3-972e431dbb40"
    },
    {
       "name":"Ornery Kudu",
       "manaCost":"{2}{G}",
       "cmc":3,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Antelope",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Antelope"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Ornery Kudu enters the battlefield, put a -1/-1 counter on target creature you control.",
       "flavor":"Debate rages among the viziers whether comparing the kudu's horns to the God-Pharaoh's is blasphemy or reverence.",
       "artist":"Deruchenko Alexander",
       "number":"178",
       "power":"3",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426880",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426880&type=card",
       "foreignNames":[
          {
             "name":"Störrisches Kudu",
             "text":"Wenn das Störrische Kudu ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.",
             "type":"Kreatur — Antilope",
             "flavor":"Unter den Wesiren herrscht Uneinigkeit darüber, ob der Vergleich von Kuduhörnern mit denen des Gott-Pharaos nun Blasphemie oder Ehrerbietung ist.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427149&type=card",
             "language":"German",
             "multiverseid":427149
          },
          {
             "name":"Kudú iracundo",
             "text":"Cuando el Kudú iracundo entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.",
             "type":"Criatura — Antílope",
             "flavor":"Existe un acalorado debate entre los visires sobre si comparar los cuernos del kudú al Dios Faraón es blasfemia o veneración.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427418&type=card",
             "language":"Spanish",
             "multiverseid":427418
          },
          {
             "name":"Koudou hargneux",
             "text":"Quand le Koudou hargneux arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.",
             "type":"Créature : antilope",
             "flavor":"Personne ne sait si comparer les cornes du koudou à celles du Dieu-Pharaon est un blasphème ou un signe de révérence, pas même les vizirs.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427687&type=card",
             "language":"French",
             "multiverseid":427687
          },
          {
             "name":"Kudu Irascibile",
             "text":"Quando il Kudu Irascibile entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.",
             "type":"Creatura — Antilope",
             "flavor":"C'è un acceso dibattito tra i visir: alcuni pensano che paragonare le corna del kudu a quelle del Dio Faraone sia blasfemo, altri credono che sia una forma di venerazione.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427956&type=card",
             "language":"Italian",
             "multiverseid":427956
          },
          {
             "name":"気性の荒いクーズー",
             "text":"気性の荒いクーズーが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。",
             "type":"クリーチャー — アンテロープ",
             "flavor":"クーズーの角を王神の角と比較するのは涜神にあたるかどうか、侍臣たちの間で論争が持ち上がっている。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428225&type=card",
             "language":"Japanese",
             "multiverseid":428225
          },
          {
             "name":"성질 더러운 쿠두",
             "text":"성질 더러운 쿠두가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.",
             "type":"생물 — 영양",
             "flavor":"쿠두의 뿔과 신 파라오의 뿔을 비교하는 게 신성모독인지 경배인지를 두고 고관들끼리 격론을 벌인다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428494&type=card",
             "language":"Korean",
             "multiverseid":428494
          },
          {
             "name":"Kudu Turrão",
             "text":"Quando Kudu Turrão entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.",
             "type":"Criatura — Antílope",
             "flavor":"Os vizires têm opiniões divergentes quanto à comparação dos chifres do kudu aos do Faraó-Deus. Alguns dizem que seja uma blasfêmia, outros uma forma de reverência.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428763&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428763
          },
          {
             "name":"Норовистый Куду",
             "text":"Когда Норовистый Куду выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.",
             "type":"Существо — Антилопа",
             "flavor":"Среди визирей не утихают споры о том, чем является сравнение рогов куду с рогами Бога-Фараона: богохульством или проявлением почтения.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429032&type=card",
             "language":"Russian",
             "multiverseid":429032
          },
          {
             "name":"暴躁捻角羚",
             "text":"当暴躁捻角羚进战场时，在目标由你操控的生物上放置一个-1/-1指示物。",
             "type":"生物～羚羊",
             "flavor":"拿法老神尊角与羚羊长角相提并论到底算是亵渎还是崇敬，诸位维齐尔激烈争辩，莫衷一是。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429301&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429301
          },
          {
             "name":"暴躁捻角羚",
             "text":"當暴躁捻角羚進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。",
             "type":"生物～羚羊",
             "flavor":"拿法老神尊角與羚羊長角相提並論到底算是褻瀆還是崇敬，諸位維齊爾激烈爭辯，莫衷一是。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429570&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429570
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Ornery Kudu enters the battlefield, put a -1/-1 counter on target creature you control.",
       "originalType":"Creature - Antelope",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"cc773e67-031f-5fa0-91fc-f6f315a5a322"
    },
    {
       "name":"Greater Sandwurm",
       "manaCost":"{5}{G}{G}",
       "cmc":7,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Wurm",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Wurm"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Greater Sandwurm can't be blocked by creatures with power 2 or less.\nCycling {2} ({2}, Discard this card: Draw a card.)",
       "flavor":"A sandwurm can lie in wait beneath the sands for years until the slightest tremor alerts it to the presence of prey.",
       "artist":"Steven Belledin",
       "number":"168",
       "power":"7",
       "toughness":"7",
       "layout":"normal",
       "multiverseid":"426870",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426870&type=card",
       "rulings":[
          {
             "date":"2020-04-17",
             "text":"Once a creature with power 3 or greater has blocked Greater Sandwurm, changing the power of the blocking creature won’t cause Greater Sandwurm to become unblocked."
          }
       ],
       "foreignNames":[
          {
             "name":"Großer Sandwurm",
             "text":"Der Große Sandwurm kann von Kreaturen mit Stärke 2 oder weniger nicht geblockt werden.\nUmwandlung {2} ({2}, wirf diese Karte ab: Ziehe eine Karte.)",
             "type":"Kreatur — Wurm",
             "flavor":"Ein Sandwurm kann mehrere Jahre lang versteckt im Sand liegen, bis die kleinste Erschütterung ihn aufweckt.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427139&type=card",
             "language":"German",
             "multiverseid":427139
          },
          {
             "name":"Gran sierpe de arena",
             "text":"La Gran sierpe de arena no puede ser bloqueada por criaturas con fuerza de 2 o menos.\nCiclo {2}. ({2}, descartar esta carta: Roba una carta.)",
             "type":"Criatura — Sierpe",
             "flavor":"Una sierpe de arena puede esperar durante años bajo la arena hasta que la más pequeña vibración la alerta de la presencia de una presa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427408&type=card",
             "language":"Spanish",
             "multiverseid":427408
          },
          {
             "name":"Grande guivre des sables",
             "text":"La Grande guivre des sables ne peut pas être bloquée par les créatures de force inférieure ou égale à 2.\nRecyclage {2} ({2}, défaussez-vous de cette carte : Piochez une carte.)",
             "type":"Créature : guivre",
             "flavor":"Une guivre des sables peut attendre des années sous le sable avant qu'un minuscule tremblement ne l'informe de la présence d'une proie.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427677&type=card",
             "language":"French",
             "multiverseid":427677
          },
          {
             "name":"Wurm Sabbioso Maggiore",
             "text":"Il Wurm Sabbioso Maggiore non può essere bloccato da creature con forza pari o inferiore a 2.\nCiclo {2} ({2}, Scarta questa carta: Pesca una carta.)",
             "type":"Creatura — Wurm",
             "flavor":"Un wurm sabbioso può restare in attesa per anni sotto la sabbia, fino a quando il più lieve sussulto non lo avvisa della presenza di una preda.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427946&type=card",
             "language":"Italian",
             "multiverseid":427946
          },
          {
             "name":"大いなるサンドワーム",
             "text":"大いなるサンドワームは、パワーが２以下のクリーチャーによってはブロックされない。\nサイクリング{2}（{2}, このカードを捨てる：カードを１枚引く。）",
             "type":"クリーチャー — ワーム",
             "flavor":"サンドワームは何年間も砂の下にじっと潜み、微かな振動が餌の到着を知らせるのを待つ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428215&type=card",
             "language":"Japanese",
             "multiverseid":428215
          },
          {
             "name":"대형 모래웜",
             "text":"대형 모래웜은 공격력이 2 이하인 생물에게 방어될 수 없다.\n순환 {2} ({2}, 이 카드를 버린다: 카드 한 장을 뽑는다.)",
             "type":"생물 — 웜",
             "flavor":"모래웜은 모래 밑에서 수년간 기다릴 수 있으며 자그마한 진동으로도 먹잇감의 존재를 알아챈다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428484&type=card",
             "language":"Korean",
             "multiverseid":428484
          },
          {
             "name":"Grão-vorme-da-areia",
             "text":"Grão-vorme-da-areia não pode ser bloqueado por criaturas com poder igual ou inferior a 2.\nReciclar {2} ({2}, Descarte este card: Compre um card.)",
             "type":"Criatura — Vorme",
             "flavor":"Um vorme-da-areia pode esperar sob as areias por anos até que um suave tremor o alerte sobre a presença de uma presa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428753&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428753
          },
          {
             "name":"Гигантский Песчаный Вурм",
             "text":"Гигантский Песчаный Вурм не может быть заблокирован существами с силой 2 или меньше.\nЦикл {2} ({2}, сбросьте эту карту: возьмите карту.)",
             "type":"Существо — Вурм",
             "flavor":"Песчаный вурм может годами недвижимо ждать, зарывшись в песок, пока чуть заметная дрожь земли не возвестит о приближении жертвы.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429022&type=card",
             "language":"Russian",
             "multiverseid":429022
          },
          {
             "name":"高大沙丘亚龙",
             "text":"高大沙丘亚龙不能被力量等于或小于2的生物阻挡。\n循环{2}（{2}，弃掉此牌：抓一张牌。）",
             "type":"生物～亚龙",
             "flavor":"沙丘亚龙可蛰伏黄沙之中长达数年之久，猎物稍有动静都能引其现身。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429291&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429291
          },
          {
             "name":"高大沙丘亞龍",
             "text":"高大沙丘亞龍不能被力量等於或小於2的生物阻擋。\n循環{2}（{2}，棄掉此牌：抽一張牌。）",
             "type":"生物～亞龍",
             "flavor":"沙丘亞龍可蟄伏黃沙之中長達數年之久，獵物稍有動靜都能引其現身。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429560&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429560
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "IKO",
          "MB1"
       ],
       "originalText":"Greater Sandwurm can't be blocked by creatures with power 2 or less.\nCycling {2} ({2}, Discard this card: Draw a card.)",
       "originalType":"Creature - Wurm",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"45c02b17-f530-5f63-9734-3ae9b34ed08b"
    },
    {
       "name":"Doomed Dissenter",
       "manaCost":"{1}{B}",
       "cmc":2,
       "colors":[
          "B"
       ],
       "colorIdentity":[
          "B"
       ],
       "type":"Creature — Human",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Doomed Dissenter dies, create a 2/2 black Zombie creature token.",
       "flavor":"There is only one fate left to those banished from the God-Pharaoh's city.",
       "artist":"Tony Foti",
       "number":"87",
       "power":"1",
       "toughness":"1",
       "layout":"normal",
       "multiverseid":"426789",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426789&type=card",
       "foreignNames":[
          {
             "name":"Todgeweihter Abtrünniger",
             "text":"Wenn der Todgeweihte Abtrünnige stirbt, erzeuge einen 2/2 schwarzen Zombie-Kreaturenspielstein.",
             "type":"Kreatur — Mensch",
             "flavor":"Wer aus der Stadt des Gott-Pharaos verstoßen wurde, hat nur noch einen einzigen Weg vor sich.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427058&type=card",
             "language":"German",
             "multiverseid":427058
          },
          {
             "name":"Disidente condenado",
             "text":"Cuando el Disidente condenado muera, crea una ficha de criatura Zombie negra 2/2.",
             "type":"Criatura — Humano",
             "flavor":"Solo hay un final para los desterrados de la ciudad del Dios Faraón.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427327&type=card",
             "language":"Spanish",
             "multiverseid":427327
          },
          {
             "name":"Dissident damné",
             "text":"Quand le Dissident damné meurt, créez un jeton de créature 2/2 noire Zombie.",
             "type":"Créature : humain",
             "flavor":"Il n'y a qu'un sort réservé à ceux qui ont été bannis de la ville du Dieu-Pharaon.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427596&type=card",
             "language":"French",
             "multiverseid":427596
          },
          {
             "name":"Dissenziente Condannato",
             "text":"Quando il Dissenziente Condannato muore, crea una pedina creatura Zombie 2/2 nera.",
             "type":"Creatura — Umano",
             "flavor":"Un unico destino attende coloro che sono stati banditi dalla città del Dio Faraone.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427865&type=card",
             "language":"Italian",
             "multiverseid":427865
          },
          {
             "name":"悪運尽きた造反者",
             "text":"悪運尽きた造反者が死亡したとき、黒の２/２のゾンビ・クリーチャー・トークンを１体生成する。",
             "type":"クリーチャー — 人間",
             "flavor":"王神の街から追放された者を待つ運命はただ一つだ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428134&type=card",
             "language":"Japanese",
             "multiverseid":428134
          },
          {
             "name":"불운한 반대자",
             "text":"불운한 반대자가 죽을 때, 2/2 흑색 좀비 생물 토큰 한 개를 만든다.",
             "type":"생물 — 인간",
             "flavor":"신 파라오의 도시에서 추방된 자에게는 하나의 운명만이 기다린다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428403&type=card",
             "language":"Korean",
             "multiverseid":428403
          },
          {
             "name":"Dissidente Condenado",
             "text":"Quando Dissidente Condenado morrer, crie uma ficha de criatura preta 2/2 do tipo Zumbi.",
             "type":"Criatura — Humano",
             "flavor":"Aos banidos da cidade do Faraó-Deus resta apenas um destino.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428672&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428672
          },
          {
             "name":"Обреченный Инакомыслящий",
             "text":"Когда Обреченный Инакомыслящий умирает, создайте одну фишку существа 2/2 черный Зомби.",
             "type":"Существо — Человек",
             "flavor":"Тех, кого изгоняют из города Бога-Фараона, ожидает лишь одна участь.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428941&type=card",
             "language":"Russian",
             "multiverseid":428941
          },
          {
             "name":"注亡逆徒",
             "text":"当注亡逆徒死去时，派出一个2/2黑色灵俑衍生生物。",
             "type":"生物～人类",
             "flavor":"被逐出法老神城市的人，面前只有一种命运。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429210&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429210
          },
          {
             "name":"註亡逆徒",
             "text":"當註亡逆徒死去時，派出一個2/2黑色殭屍衍生生物。",
             "type":"生物～人類",
             "flavor":"被逐出法老神城市的人，面前只有一種命運。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429479&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429479
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "BBD",
          "DBL",
          "GN3",
          "J22",
          "M19",
          "MB1",
          "VOW"
       ],
       "originalText":"When Doomed Dissenter dies, create a 2/2 black Zombie creature token.",
       "originalType":"Creature - Human",
       "legalities":[
          {
             "format":"Alchemy",
             "legality":"Legal"
          },
          {
             "format":"Brawl",
             "legality":"Legal"
          },
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Future",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Standard",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"2d932232-5d1f-5fb5-aff0-ed3eccfe6b88"
    },
    {
       "name":"Hooded Brawler",
       "manaCost":"{2}{G}",
       "cmc":3,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Naga Warrior",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Naga",
          "Warrior"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"You may exert Hooded Brawler as it attacks. When you do, it gets +2/+2 until end of turn. (An exerted creature won't untap during your next untap step.)",
       "flavor":"Nagas wielding twin daggers excel at the fighting technique known as the Bite of Rhonas.",
       "artist":"Daarken",
       "number":"173",
       "power":"3",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426875",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426875&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature."
          },
          {
             "date":"2017-04-18",
             "text":"If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything."
          },
          {
             "date":"2017-04-18",
             "text":"If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step."
          },
          {
             "date":"2017-04-18",
             "text":"All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared."
          }
       ],
       "foreignNames":[
          {
             "name":"Schirmraufbold",
             "text":"Du kannst den Schirmraufbold erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +2/+2 bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)",
             "type":"Kreatur — Naga, Krieger",
             "flavor":"Niemand verkörpert den Kampfstil der Bitterklinge so sehr wie ein Naga mit Zwillingsdolchen.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427144&type=card",
             "language":"German",
             "multiverseid":427144
          },
          {
             "name":"Pendenciero encapuchado",
             "text":"Puedes espolear al Pendenciero encapuchado en cuanto ataque. Cuando lo hagas, obtiene +2/+2 hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)",
             "type":"Criatura — Guerrero naga",
             "flavor":"Los naga que empuñan dagas gemelas son expertos en una técnica de combate llamada Dentellada de Rhonas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427413&type=card",
             "language":"Spanish",
             "multiverseid":427413
          },
          {
             "name":"Bagarreur cagoulard",
             "text":"Vous pouvez surmener le Bagarreur cagoulard au moment où il attaque. Quand vous faites ainsi, il gagne +2/+2 jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
             "type":"Créature : naga et guerrier",
             "flavor":"Les nagas maniant deux dagues excellent dans la technique de combat qu'on appelle la Morsure de Rhonas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427682&type=card",
             "language":"French",
             "multiverseid":427682
          },
          {
             "name":"Lottatore dal Cappuccio",
             "text":"Puoi stremare il Lottatore dal Cappuccio mentre attacca. Quando lo fai, prende +2/+2 fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
             "type":"Creatura — Guerriero Naga",
             "flavor":"I naga che brandiscono due pugnali sono abilissimi nella tecnica di combattimento nota come \"Il morso di Rhonas\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427951&type=card",
             "language":"Italian",
             "multiverseid":427951
          },
          {
             "name":"頭巾の喧嘩屋",
             "text":"頭巾の喧嘩屋が攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋２/＋２の修整を受ける。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）",
             "type":"クリーチャー — ナーガ・戦士",
             "flavor":"短剣を二本持つナーガは、ロナス咬術という戦技に秀でている。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428220&type=card",
             "language":"Japanese",
             "multiverseid":428220
          },
          {
             "name":"두건머리 싸움꾼",
             "text":"당신은 두건머리 싸움꾼으로 공격을 선언하면서 두건머리 싸움꾼을 분전시킬 수 있다. 그렇게 할 때, 두건머리 싸움꾼은 턴종료까지 +2/+2를 받는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)",
             "type":"생물 — 나가 전사",
             "flavor":"쌍단검을 사용하는 나가들은 로나스의 맹독검이라고 알려진 전투 기술에 뛰어나다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428489&type=card",
             "language":"Korean",
             "multiverseid":428489
          },
          {
             "name":"Rufião de Capelo",
             "text":"Você pode exaurir Rufião de Capelo conforme ele ataca. Quando você faz isso, ele recebe +2/+2 até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)",
             "type":"Criatura — Naga Guerreiro",
             "flavor":"As nagas que empunham duas adagas se destacam com a técnica de luta conhecida como Picada de Rhonas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428758&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428758
          },
          {
             "name":"Капюшонный Боец",
             "text":"Вы можете подстегнуть Капюшонного Бойца в момент его атаки. Когда вы это делаете, он получает +2/+2 до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)",
             "type":"Существо — Нага Воин",
             "flavor":"Вооруженные двумя клинками наги мастерски владеют техникой боя, известной как «Укус Ронаса».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429027&type=card",
             "language":"Russian",
             "multiverseid":429027
          },
          {
             "name":"胀颈好斗者",
             "text":"你可以于胀颈好斗者攻击时耗竭之。当你如此作时，它得+2/+2直到回合结束。（已耗竭的生物于你的下一个重置步骤中不能重置。）",
             "type":"生物～那伽／战士",
             "flavor":"善使双匕的那伽都擅使罗纳斯之刺这一招式。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429296&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429296
          },
          {
             "name":"脹頸好鬥者",
             "text":"你可以於脹頸好鬥者攻擊時耗竭之。當你如此作時，它得+2/+2直到回合結束。（已耗竭的生物於你的下一個重置步驟中不能重置。）",
             "type":"生物～那伽／戰士",
             "flavor":"善使雙匕的那伽都擅使羅納斯之刺這一招式。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429565&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429565
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "MB1"
       ],
       "originalText":"You may exert Hooded Brawler as it attacks. When you do, it gets +2/+2 until end of turn. (An exerted creature won't untap during your next untap step.)",
       "originalType":"Creature - Naga Warrior",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"65e636c7-1ccb-5de8-88e9-b043e8c0dff7"
    },
    {
       "name":"Wayward Servant",
       "manaCost":"{W}{B}",
       "cmc":2,
       "colors":[
          "B",
          "W"
       ],
       "colorIdentity":[
          "B",
          "W"
       ],
       "type":"Creature — Zombie",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Zombie"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Whenever another Zombie enters the battlefield under your control, each opponent loses 1 life and you gain 1 life.",
       "flavor":"If one of the anointed fails to serve with perfect obedience, the desert is always ready to receive it.",
       "artist":"Anthony Palumbo",
       "number":"208",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426910",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426910&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"If Wayward Servant enters the battlefield at the same time as another Zombie creature, its ability triggers for that Zombie."
          },
          {
             "date":"2017-04-18",
             "text":"In a Two-Headed Giant game, the triggered ability of Wayward Servant causes the opposing team to lose 2 life and you gain 1 life."
          }
       ],
       "foreignNames":[
          {
             "name":"Abtrünniger Diener",
             "text":"Immer wenn ein anderer Zombie unter deiner Kontrolle ins Spiel kommt, verliert jeder Gegner 1 Lebenspunkt und du erhältst 1 Lebenspunkt dazu.",
             "type":"Kreatur — Zombie",
             "flavor":"Falls einer der Gesalbten nicht absolute Gehorsamkeit zeigt, ist die Wüste stets dazu bereit, ihn aufzunehmen.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427179&type=card",
             "language":"German",
             "multiverseid":427179
          },
          {
             "name":"Sirviente indisciplinado",
             "text":"Siempre que otro Zombie entre al campo de batalla bajo tu control, cada oponente pierde 1 vida y tú ganas 1 vida.",
             "type":"Criatura — Zombie",
             "flavor":"Si un ungido no logra servir con intachable obediencia, el desierto siempre está listo para recibirlo.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427448&type=card",
             "language":"Spanish",
             "multiverseid":427448
          },
          {
             "name":"Servant rétif",
             "text":"À chaque fois qu'un autre zombie arrive sur le champ de bataille sous votre contrôle, chaque adversaire perd 1 point de vie et vous gagnez 1 point de vie.",
             "type":"Créature : zombie",
             "flavor":"Si l'un des consacrés faillit à son devoir d'obéissance aveugle, le désert est toujours prêt à l'accueillir.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427717&type=card",
             "language":"French",
             "multiverseid":427717
          },
          {
             "name":"Servo Disobbediente",
             "text":"Ogniqualvolta un altro Zombie entra nel campo di battaglia sotto il tuo controllo, ogni avversario perde 1 punto vita e tu guadagni 1 punto vita.",
             "type":"Creatura — Zombie",
             "flavor":"Se uno dei consacrati si rifiuta di prestare obbedienza assoluta, il deserto è sempre pronto ad accoglierlo.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427986&type=card",
             "language":"Italian",
             "multiverseid":427986
          },
          {
             "name":"むら気な召使い",
             "text":"他のゾンビが１体あなたのコントロール下で戦場に出るたび、各対戦相手はそれぞれ１点のライフを失い、あなたは１点のライフを得る。",
             "type":"クリーチャー — ゾンビ",
             "flavor":"選定された者が完璧に従順に仕えられなかったなら、いつでも砂漠が待っている。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428255&type=card",
             "language":"Japanese",
             "multiverseid":428255
          },
          {
             "name":"방종한 하수인",
             "text":"다른 좀비가 당신의 조종하에 전장에 들어올 때마다, 각 상대는 생명 1점을 잃고 당신은 생명 1점을 얻는다.",
             "type":"생물 — 좀비",
             "flavor":"세례받은 자가 완전히 복종하지 않는다면 사막은 언제나 그런 자를 거둘 준비가 되어 있다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428524&type=card",
             "language":"Korean",
             "multiverseid":428524
          },
          {
             "name":"Servo Desobediente",
             "text":"Toda vez que outro Zumbi entra no campo de batalha sob seu controle, cada oponente perde 1 ponto de vida e você ganha 1 ponto de vida.",
             "type":"Criatura — Zumbi",
             "flavor":"O deserto está sempre pronto para receber os ungidos que não servem com obediência absoluta.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428793&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428793
          },
          {
             "name":"Заблудший Слуга",
             "text":"Каждый раз, когда другой Зомби выходит на поле битвы под вашим контролем, каждый оппонент теряет 1 жизнь, а вы получаете 1 жизнь.",
             "type":"Существо — Зомби",
             "flavor":"Если кто-то из умащенных отказывается служить и беспрекословно подчиняться приказам, его всегда готова принять пустыня.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429062&type=card",
             "language":"Russian",
             "multiverseid":429062
          },
          {
             "name":"刚愎仆从",
             "text":"每当另一个灵俑在你的操控下进战场时，每位对手各失去1点生命且你获得1点生命。",
             "type":"生物～灵俑",
             "flavor":"若圣洗者未能尽心侍奉，则沙漠便会是他们的最终归宿。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429331&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429331
          },
          {
             "name":"剛愎僕從",
             "text":"每當另一個殭屍在你的操控下進戰場時，每位對手各失去1點生命且你獲得1點生命。",
             "type":"生物～殭屍",
             "flavor":"若聖洗者未能盡心侍奉，則沙漠便會是他們的最終歸宿。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429600&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429600
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"Whenever another Zombie enters the battlefield under your control, each opponent loses 1 life and you gain 1 life.",
       "originalType":"Creature - Zombie",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Restricted"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"74654008-bd71-58d5-9e40-f4faa588ebe1"
    },
    {
       "name":"Slither Blade",
       "manaCost":"{U}",
       "cmc":1,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Naga Rogue",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Naga",
          "Rogue"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Slither Blade can't be blocked.",
       "flavor":"Some naga initiates move as silently the suns' reflections on the water.",
       "artist":"Zezhou Chen",
       "number":"71",
       "power":"1",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426773",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426773&type=card",
       "foreignNames":[
          {
             "name":"Schlitterklinge",
             "text":"Die Schlitterklinge kann nicht geblockt werden.",
             "type":"Kreatur — Naga, Räuber",
             "flavor":"Mancher Naga-Geweihte bewegt sich so lautlos wie sein eigener Schatten.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427042&type=card",
             "language":"German",
             "multiverseid":427042
          },
          {
             "name":"Filo reptante",
             "text":"El Filo reptante no puede ser bloqueado.",
             "type":"Criatura — Bribón naga",
             "flavor":"Algunos iniciados naga se mueven tan silenciosamente como los reflejos de los soles en el agua.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427311&type=card",
             "language":"Spanish",
             "multiverseid":427311
          },
          {
             "name":"Lame rampante",
             "text":"La Lame rampante ne peut pas être bloquée.",
             "type":"Créature : naga et gredin",
             "flavor":"Certains adeptes nagas se déplacent aussi silencieusement que les rayons du soleil à la surface de l'eau.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427580&type=card",
             "language":"French",
             "multiverseid":427580
          },
          {
             "name":"Lama Strisciante",
             "text":"La Lama Strisciante non può essere bloccata.",
             "type":"Creatura — Farabutto Naga",
             "flavor":"Alcuni iniziati naga sono silenziosi come i riflessi dei soli sull'acqua.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427849&type=card",
             "language":"Italian",
             "multiverseid":427849
          },
          {
             "name":"這い寄る刃",
             "text":"這い寄る刃はブロックされない。",
             "type":"クリーチャー — ナーガ・ならず者",
             "flavor":"ナーガの修練者の中には、水に映る双陽のように音もなく動く者がいる。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428118&type=card",
             "language":"Japanese",
             "multiverseid":428118
          },
          {
             "name":"기어 나아가는 검사",
             "text":"기어 나아가는 검사는 방어될 수 없다.",
             "type":"생물 — 나가 도적",
             "flavor":"어떤 나가 입회자는 물에 반사되는 햇빛처럼 고요하게 움직인다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428387&type=card",
             "language":"Korean",
             "multiverseid":428387
          },
          {
             "name":"Lâmina Sinuosa",
             "text":"Lâmina Sinuosa não pode ser bloqueado.",
             "type":"Criatura — Naga Ladino",
             "flavor":"Alguns iniciados naga se movem tão silenciosamente quanto os reflexos dos sóis na água.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428656&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428656
          },
          {
             "name":"Скользящий Мечник",
             "text":"Скользящий Мечник не может быть заблокирован.",
             "type":"Существо — Нага Бродяга",
             "flavor":"Некоторые послушники-наги передвигаются бесшумно, словно отражения солнц на воде.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428925&type=card",
             "language":"Russian",
             "multiverseid":428925
          },
          {
             "name":"蛇身刀客",
             "text":"蛇身刀客不能被阻挡。",
             "type":"生物～那伽／浪客",
             "flavor":"有些那伽祀徒移动时静如双日水中映影。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429194&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429194
          },
          {
             "name":"蛇身刀客",
             "text":"蛇身刀客不能被阻擋。",
             "type":"生物～那伽／浪客",
             "flavor":"有些那伽祀徒移動時靜如雙日水中映影。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429463&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429463
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "MB1",
          "ZNC"
       ],
       "originalText":"Slither Blade can't be blocked.",
       "originalType":"Creature - Naga Rogue",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"fdc3e63f-c755-5a0a-85dc-4a013b2e8f6d"
    },
    {
       "name":"Gust Walker",
       "manaCost":"{1}{W}",
       "cmc":2,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Human Wizard",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human",
          "Wizard"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
       "flavor":"\"I'm never unarmed.\"",
       "artist":"Jason Rainville",
       "number":"17",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426719",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426719&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature."
          },
          {
             "date":"2017-04-18",
             "text":"If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything."
          },
          {
             "date":"2017-04-18",
             "text":"If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step."
          },
          {
             "date":"2017-04-18",
             "text":"All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared."
          }
       ],
       "foreignNames":[
          {
             "name":"Böenwanderer",
             "text":"Du kannst den Böenwanderer erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +1/+1 und Flugfähigkeit bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)",
             "type":"Kreatur — Mensch, Zauberer",
             "flavor":"„Ich trage vielleicht keine Waffen, aber ich bin niemals unbewaffnet.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426988&type=card",
             "language":"German",
             "multiverseid":426988
          },
          {
             "name":"Caminavientos",
             "text":"Puedes espolear al Caminavientos en cuanto ataque. Cuando lo hagas, obtiene +1/+1 y gana la habilidad de volar hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)",
             "type":"Criatura — Hechicero humano",
             "flavor":"\"Nunca voy desarmado\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427257&type=card",
             "language":"Spanish",
             "multiverseid":427257
          },
          {
             "name":"Marcheur des rafales",
             "text":"Vous pouvez surmener le Marcheur des rafales au moment où il attaque. Quand vous faites ainsi, il gagne +1/+1 et acquiert le vol jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
             "type":"Créature : humain et sorcier",
             "flavor":"« Je ne suis jamais désarmé. »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427526&type=card",
             "language":"French",
             "multiverseid":427526
          },
          {
             "name":"Calcaraffiche",
             "text":"Puoi stremare il Calcaraffiche mentre attacca. Quando lo fai, prende +1/+1 e ha volare fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
             "type":"Creatura — Mago Umano",
             "flavor":"\"Non sono mai disarmato.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427795&type=card",
             "language":"Italian",
             "multiverseid":427795
          },
          {
             "name":"突風歩き",
             "text":"突風歩きが攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋１/＋１の修整を受けるとともに飛行を得る。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）",
             "type":"クリーチャー — 人間・ウィザード",
             "flavor":"「私が丸腰でいることはない。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428064&type=card",
             "language":"Japanese",
             "multiverseid":428064
          },
          {
             "name":"질풍 보행자",
             "text":"당신은 질풍 보행자로 공격을 선언하면서 질풍 보행자를 분전시킬 수 있다. 그렇게 할 때, 질풍 보행자는 턴종료까지 +1/+1을 받고 비행을 얻는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)",
             "type":"생물 — 인간 마법사",
             "flavor":"\"난 언제나 방비 상태야.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428333&type=card",
             "language":"Korean",
             "multiverseid":428333
          },
          {
             "name":"Caminhante das Rajadas",
             "text":"Você pode exaurir Caminhante das Rajadas conforme ele ataca. Quando você faz isso, ele recebe +1/+1 e ganha voar até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)",
             "type":"Criatura — Humano Mago",
             "flavor":"\"Eu nunca estou desarmado.\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428602&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428602
          },
          {
             "name":"Путник Ветра",
             "text":"Вы можете подстегнуть Путника Ветра в момент его атаки. Когда вы это делаете, он получает +1/+1 и Полет до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)",
             "type":"Существо — Человек Чародей",
             "flavor":"«Я никогда не бываю без оружия».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428871&type=card",
             "language":"Russian",
             "multiverseid":428871
          },
          {
             "name":"踏风客",
             "text":"你可以于踏风客攻击时耗竭之。当你如此作时，直到回合结束，它得+1/+1且获得飞行异能。（已耗竭的生物于你的下一个重置步骤中不能重置。）",
             "type":"生物～人类／法术师",
             "flavor":"「我永远不会缺武器用。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429140&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429140
          },
          {
             "name":"踏風客",
             "text":"你可以於踏風客攻擊時耗竭之。當你如此作時，直到回合結束，它得+1/+1且獲得飛行異能。（已耗竭的生物於你的下一個重置步驟中不能重置。）",
             "type":"生物～人類／魔法師",
             "flavor":"「我永遠不會缺武器用。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429409&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429409
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "MB1"
       ],
       "originalText":"You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
       "originalType":"Creature - Human Wizard",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"c5c0d76d-90a0-5b21-b73a-10de83a321c9"
    },
    {
       "name":"Hyena Pack",
       "manaCost":"{2}{R}{R}",
       "cmc":4,
       "colors":[
          "R"
       ],
       "colorIdentity":[
          "R"
       ],
       "type":"Creature — Hyena",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Hyena"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "flavor":"With carrion a rarity in the Broken Lands, the hyenas that stalk the deserts hunt in packs.",
       "artist":"Winona Nelson",
       "number":"139",
       "power":"3",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426841",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426841&type=card",
       "foreignNames":[
          {
             "name":"Hyänenrudel",
             "type":"Kreatur — Hyäne",
             "flavor":"Aas ist in der Splitterwüste so selten, dass selbst die Hyänen anfangen, auf die Jagd zu gehen.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427110&type=card",
             "language":"German",
             "multiverseid":427110
          },
          {
             "name":"Manada de hienas",
             "type":"Criatura — Hiena",
             "flavor":"La carroña no abunda en las Tierras Desoladas, por lo que las hienas que acechan en los desiertos cazan en manadas.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427379&type=card",
             "language":"Spanish",
             "multiverseid":427379
          },
          {
             "name":"Meute de hyènes",
             "type":"Créature : hyène",
             "flavor":"Les charognes sont rares dans les Terres brisées, c'est pourquoi les hyènes qui arpentent le désert chassent en meute.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427648&type=card",
             "language":"French",
             "multiverseid":427648
          },
          {
             "name":"Branco di Iene",
             "type":"Creatura — Iena",
             "flavor":"Poiché le carogne scarseggiano nelle Terre spezzate, le iene che si aggirano per i deserti cacciano in branco.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427917&type=card",
             "language":"Italian",
             "multiverseid":427917
          },
          {
             "name":"ハイエナの群れ",
             "type":"クリーチャー — ハイエナ",
             "flavor":"遺棄地に稀有なる屍肉あらば、砂漠に群れ成すハイエナあり。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428186&type=card",
             "language":"Japanese",
             "multiverseid":428186
          },
          {
             "name":"하이에나 무리",
             "type":"생물 — 하이에나",
             "flavor":"시체를 찾기 어려운 망가진 땅에서는 사막을 배회하는 하이에나들이 무리를 지어 사냥한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428455&type=card",
             "language":"Korean",
             "multiverseid":428455
          },
          {
             "name":"Alcateia de Hienas",
             "type":"Criatura — Hiena",
             "flavor":"Como carcaças são uma raridade nas Terras Partidas, as hienas que espreitam nos desertos caçam em bando.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428724&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428724
          },
          {
             "name":"Стая Гиен",
             "type":"Существо — Гиена",
             "flavor":"Падаль редко встречается в Смятенных Землях, и живущие в пустыне гиены сбиваются для охоты в стаи.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428993&type=card",
             "language":"Russian",
             "multiverseid":428993
          },
          {
             "name":"鬣狗群",
             "type":"生物～鬣狗",
             "flavor":"荒土中腐肉稀缺，于沙漠中游荡的鬣狗常常成群狩猎。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429262&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429262
          },
          {
             "name":"鬣狗群",
             "type":"生物～鬣狗",
             "flavor":"荒土中腐肉稀缺，於沙漠中遊蕩的鬣狗常常成群狩獵。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429531&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429531
          }
       ],
       "printings":[
          "AKH",
          "MB1"
       ],
       "originalType":"Creature - Hyena",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"5a9e9993-1216-55cf-9c6d-ac6412009469"
    },
    {
       "name":"Crocodile of the Crossing",
       "manaCost":"{3}{G}",
       "cmc":4,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Crocodile",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Crocodile"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Haste\nWhen Crocodile of the Crossing enters the battlefield, put a -1/-1 counter on target creature you control.",
       "flavor":"\"Everything in the trial has teeth. You will overcome them, or you will feed them.\"\n—Rhonas, god of strength",
       "artist":"Kev Walker",
       "number":"162",
       "power":"5",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426864",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426864&type=card",
       "foreignNames":[
          {
             "name":"Krokodil des Scheidewegs",
             "text":"Eile\nWenn das Krokodil des Scheidewegs ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.",
             "type":"Kreatur — Krokodil",
             "flavor":"„Alles, was einem in der Prüfung begegnet, hat Reißzähne und nichts davon will nur spielen.\" —Rhonas, Gott der Stärke",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427133&type=card",
             "language":"German",
             "multiverseid":427133
          },
          {
             "name":"Cocodrilo de La Encrucijada",
             "text":"Prisa.\nCuando el Cocodrilo de La Encrucijada entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.",
             "type":"Criatura — Cocodrilo",
             "flavor":"\"Todo lo que compone la prueba tiene dientes. O los superas, o los alimentas\". —Rhonas, dios de la fuerza",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427402&type=card",
             "language":"Spanish",
             "multiverseid":427402
          },
          {
             "name":"Crocodile de la Traversée",
             "text":"Célérité\nQuand le Crocodile de la Traversée arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.",
             "type":"Créature : crocodile",
             "flavor":"« Pendant les épreuves, tous les dangers ont des dents. Surmontez-les, ou nourrissez-les. » —Rhonas, dieu de la Force",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427671&type=card",
             "language":"French",
             "multiverseid":427671
          },
          {
             "name":"Coccodrillo del Guado",
             "text":"Rapidità\nQuando il Coccodrillo del Guado entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.",
             "type":"Creatura — Coccodrillo",
             "flavor":"\"Nell'ordalia vi ritroverete denti ovunque. Spezzateli o saranno loro a spezzare voi.\" —Rhonas, dio della forza",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427940&type=card",
             "language":"Italian",
             "multiverseid":427940
          },
          {
             "name":"横断地のクロコダイル",
             "text":"速攻\n横断地のクロコダイルが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。",
             "type":"クリーチャー — クロコダイル",
             "flavor":"「試練は過酷である。襲い来るものに勝たねば餌となるのみ。」 ――活力の神、ロナス",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428209&type=card",
             "language":"Japanese",
             "multiverseid":428209
          },
          {
             "name":"횡단 길목의 악어",
             "text":"신속\n횡단 길목의 악어가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.",
             "type":"생물 — 악어",
             "flavor":"\"시험에 등장하는 모든 괴수는 날카로운 이를 가졌다. 이 놈들을 처치하지 못다면 먹잇감이 될 것이다.\" —힘의 신 로나스",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428478&type=card",
             "language":"Korean",
             "multiverseid":428478
          },
          {
             "name":"Crocodilo do Vau",
             "text":"Ímpeto\nQuando Crocodilo do Vau entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.",
             "type":"Criatura — Crocodilo",
             "flavor":"\"Tudo na prova tem dentes. Supere-os ou alimente-os.\" — Rhonas, deus da força",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428747&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428747
          },
          {
             "name":"Крокодил Переправы",
             "text":"Ускорение\nКогда Крокодил Переправы выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.",
             "type":"Существо — Крокодил",
             "flavor":"«В этом испытании у каждого есть зубы. Ты или победишь, или станешь пищей». — Ронас, бог силы",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429016&type=card",
             "language":"Russian",
             "multiverseid":429016
          },
          {
             "name":"分岔口鳄鱼",
             "text":"敏捷\n当分岔口鳄鱼进战场时，在目标由你操控的生物上放置一个-1/-1指示物。",
             "type":"生物～鳄鱼",
             "flavor":"「这祀炼中你所面对的一切都有尖牙利齿。赢不了的话，你就会成为盘中美餐。」 ～力量之神罗纳斯",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429285&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429285
          },
          {
             "name":"分岔口鱷魚",
             "text":"敏捷\n當分岔口鱷魚進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。",
             "type":"生物～鱷魚",
             "flavor":"「這祀煉中你所面對的一切都有尖牙利齒。贏不了的話，你就會成為盤中美餐。」 ～力量之神羅納斯",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429554&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429554
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"Haste\nWhen Crocodile of the Crossing enters the battlefield, put a -1/-1 counter on target creature you control.",
       "originalType":"Creature - Crocodile",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Restricted"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"57ed2278-3c90-55f7-b058-6b5e79976cfd"
    },
    {
       "name":"Zenith Seeker",
       "manaCost":"{3}{U}",
       "cmc":4,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Bird Wizard",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Bird",
          "Wizard"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Flying\nWhenever you cycle or discard a card, target creature gains flying until end of turn.",
       "flavor":"Only from the sky can one fully understand the horrors of the wastes and the wonder of the Hekma's protection.",
       "artist":"Jason Kang",
       "number":"77",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426779",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426779&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"Giving a creature flying after it’s already been blocked won’t change or undo that block. If you want the flying to affect what can block the creature, you must cycle or discard a card during the declare attackers step at the latest."
          },
          {
             "date":"2017-04-18",
             "text":"Some cards have an ability that triggers whenever you cycle any card. These triggered abilities resolve before you draw from the cycling ability."
          },
          {
             "date":"2017-04-18",
             "text":"An ability that triggers whenever you discard a card doesn’t give you permission to discard cards. You’ll need another effect that instructs or allows you to discard them."
          },
          {
             "date":"2017-04-18",
             "text":"An ability that triggers whenever you “cycle or discard” a card triggers only once if you cycle a card. The ability “Whenever you discard a card” is functionally identical to this ability; cycling is mentioned for clarity."
          },
          {
             "date":"2017-04-18",
             "text":"If a player discards a card during their cleanup step due to having too many cards in hand, any appropriate abilities that trigger on discarding that card trigger. If this happens, those triggered abilities are put onto the stack and players receive priority in that cleanup step to cast spells or activate abilities (normally, no players may take actions during a cleanup step). Another cleanup step is created following that one."
          }
       ],
       "foreignNames":[
          {
             "name":"Zenitsucher",
             "text":"Fliegend\nImmer wenn du eine Karte umwandelst oder abwirfst, erhält eine Kreatur deiner Wahl Flugfähigkeit bis zum Ende des Zuges.",
             "type":"Kreatur — Vogel, Zauberer",
             "flavor":"Nur aus der Luft begreift man wirklich, welche Schrecken in der Ödnis lauern und was für ein Segen das Hekma ist.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427048&type=card",
             "language":"German",
             "multiverseid":427048
          },
          {
             "name":"Buscador del cénit",
             "text":"Vuela.\nSiempre que actives una habilidad de ciclo o descartes una carta, la criatura objetivo gana la habilidad de volar hasta el final del turno.",
             "type":"Criatura — Hechicero ave",
             "flavor":"Solo desde los cielos se comprende realmente el horror de los yermos y la maravilla de la protección de la Hekma.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427317&type=card",
             "language":"Spanish",
             "multiverseid":427317
          },
          {
             "name":"Chercheur de zénith",
             "text":"Vol\nÀ chaque fois que vous recyclez ou vous défaussez d'une carte, la créature ciblée acquiert le vol jusqu'à la fin du tour.",
             "type":"Créature : oiseau et sorcier",
             "flavor":"Il n'y a que depuis les cieux que l'on peut concevoir l'horreur des landes et le miracle de l'Hekma.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427586&type=card",
             "language":"French",
             "multiverseid":427586
          },
          {
             "name":"Cercatore dello Zenit",
             "text":"Volare\nOgniqualvolta cicli o scarti una carta, una creatura bersaglio ha volare fino alla fine del turno.",
             "type":"Creatura — Mago Uccello",
             "flavor":"Solo dal cielo si scorgono davvero gli orrori delle lande desolate e la miracolosa protezione dell'Hekma.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427855&type=card",
             "language":"Italian",
             "multiverseid":427855
          },
          {
             "name":"天頂の探求者",
             "text":"飛行\nあなたがカードを１枚サイクリングするか捨てるたび、クリーチャー１体を対象とする。ターン終了時まで、それは飛行を得る。",
             "type":"クリーチャー — 鳥・ウィザード",
             "flavor":"不毛地の恐ろしさとヘクマの防御のありがたさをはっきりと理解できるのは、空から見たときのみだ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428124&type=card",
             "language":"Japanese",
             "multiverseid":428124
          },
          {
             "name":"천공 추적자",
             "text":"비행\n당신이 카드를 순환하거나 버릴 때마다, 생물을 목표로 정한다. 그 생물은 턴종료까지 비행을 얻는다.",
             "type":"생물 — 조류 마법사",
             "flavor":"하늘에서 봐야만 불모지의 괴수들과 헤크마가 제공하는 보호의 경이로움을 이해할 수 있다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428393&type=card",
             "language":"Korean",
             "multiverseid":428393
          },
          {
             "name":"Buscador do Zênite",
             "text":"Voar\nToda vez que você recicla ou descarta um card, a criatura alvo ganha voar até o final do turno.",
             "type":"Criatura — Ave Mago",
             "flavor":"Somente dos céus é possível compreender plenamente os horrores dos ermos e a maravilha da proteção da Hekma.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428662&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428662
          },
          {
             "name":"Искатель Зенита",
             "text":"Полет\nКаждый раз, когда вы совершаете Цикл или сбрасываете карту, целевое существо получает Полет до конца хода.",
             "type":"Существо — Птица Чародей",
             "flavor":"Лишь глядя с неба можно в полной мере осознать, что за кошмары бушуют в пустошах, и сколь чудесна защита Хекмы.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428931&type=card",
             "language":"Russian",
             "multiverseid":428931
          },
          {
             "name":"凌日探求者",
             "text":"飞行\n每当你循环或弃一张牌时，目标生物获得飞行异能直到回合结束。",
             "type":"生物～鸟／法术师",
             "flavor":"只有在空中才能彻底明白荒土的恐怖以及避世帘的神奇保护。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429200&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429200
          },
          {
             "name":"凌日探求者",
             "text":"飛行\n每當你循環或棄一張牌時，目標生物獲得飛行異能直到回合結束。",
             "type":"生物～鳥／魔法師",
             "flavor":"只有在空中才能徹底明白荒土的恐怖以及避世簾的神奇保護。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429469&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429469
          }
       ],
       "printings":[
          "AKH"
       ],
       "originalText":"Flying\nWhenever you cycle or discard a card, target creature gains flying until end of turn.",
       "originalType":"Creature - Bird Wizard",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Restricted"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"cba6ac44-b847-5df4-8cdb-584fcbfa3f09"
    },
    {
       "name":"Bone Picker",
       "manaCost":"{3}{B}",
       "cmc":4,
       "colors":[
          "B"
       ],
       "colorIdentity":[
          "B"
       ],
       "type":"Creature — Bird",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Bird"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"This spell costs {3} less to cast if a creature died this turn.\nFlying, deathtouch",
       "flavor":"They are the first to greet dissenters on their journey into exile.",
       "artist":"Yeong-Hao Han",
       "number":"81",
       "power":"3",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426783",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426783&type=card",
       "rulings":[
          {
             "date":"2020-08-07",
             "text":"In a multiplayer game, a player may lose the game at the same time that their creatures die. If so, Bone Picker's cost reduction applies."
          }
       ],
       "foreignNames":[
          {
             "name":"Knochenpicker",
             "text":"Der Knochenpicker kostet beim Wirken {3} weniger, falls in diesem Zug eine Kreatur gestorben ist.\nFliegend, Todesberührung",
             "type":"Kreatur — Vogel",
             "flavor":"Sie sind das Begrüßungskomitee, das jeden Abtrünnigen auf seinem Weg ins Exil empfängt.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427052&type=card",
             "language":"German",
             "multiverseid":427052
          },
          {
             "name":"Buscadespojos",
             "text":"Te cuesta {3} menos lanzar el Buscadespojos si una criatura murió este turno.\nVuela, toque mortal.",
             "type":"Criatura — Ave",
             "flavor":"Son los primeros en dar la bienvenida a los disidentes en su camino al exilio.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427321&type=card",
             "language":"Spanish",
             "multiverseid":427321
          },
          {
             "name":"Glaneur d'os",
             "text":"Le Glaneur d'os coûte {3} de moins à lancer si une créature est morte ce tour-ci.\nVol, contact mortel",
             "type":"Créature : oiseau",
             "flavor":"Ils sont les premiers à accueillir les dissidents sur la route de l'exil.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427590&type=card",
             "language":"French",
             "multiverseid":427590
          },
          {
             "name":"Spolpaossa",
             "text":"Lo Spolpaossa costa {3} in meno per essere lanciato se è morta una creatura in questo turno.\nVolare, tocco letale",
             "type":"Creatura — Uccello",
             "flavor":"Sono i primi ad accogliere i dissenzienti in viaggio verso l'esilio.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427859&type=card",
             "language":"Italian",
             "multiverseid":427859
          },
          {
             "name":"ホネツツキ",
             "text":"このターンにクリーチャーが死亡していたなら、ホネツツキを唱えるためのコストは{3}少なくなる。\n飛行、接死",
             "type":"クリーチャー — 鳥",
             "flavor":"流刑地への旅で造反者を最初に出迎えるのはホネツツキだ。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428128&type=card",
             "language":"Japanese",
             "multiverseid":428128
          },
          {
             "name":"뼈 청소부",
             "text":"이 턴에 생물이 죽었다면, 뼈 청소부의 발동 비용이 {3} 감소한다.\n비행, 치명타",
             "type":"생물 — 조류",
             "flavor":"이 놈들이 추방된 반대자들을 가장 먼저 맞아준다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428397&type=card",
             "language":"Korean",
             "multiverseid":428397
          },
          {
             "name":"Pega-ossos",
             "text":"Pega-ossos custa {3} a menos para ser conjurado se uma criatura morreu neste turno.\nVoar, toque mortífero",
             "type":"Criatura — Ave",
             "flavor":"Eles são os primeiros a receber os dissidentes em sua jornada para o exílio.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428666&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428666
          },
          {
             "name":"Трупоед",
             "text":"Разыгрывание Трупоеда стоит на {3} меньше, если в этом ходу умерло существо.\nПолет, Смертельное касание",
             "type":"Существо — Птица",
             "flavor":"Они первыми встречают инакомыслящих на пути в изгнание.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428935&type=card",
             "language":"Russian",
             "multiverseid":428935
          },
          {
             "name":"食骨鸟",
             "text":"如果本回合有生物死去，则食骨鸟减少{3}来施放。\n飞行，死触",
             "type":"生物～鸟",
             "flavor":"它们是逆徒在流放路途中的首批访客。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429204&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429204
          },
          {
             "name":"食骨鳥",
             "text":"如果本回合有生物死去，則食骨鳥減少{3}來施放。\n飛行，死觸",
             "type":"生物～鳥",
             "flavor":"牠們是逆徒在流放路途中的首批訪客。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429473&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429473
          }
       ],
       "printings":[
          "2XM",
          "AKH",
          "AKR",
          "J22",
          "JMP"
       ],
       "originalText":"Bone Picker costs {3} less to cast if a creature died this turn.\nFlying, deathtouch",
       "originalType":"Creature - Bird",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"dad332dd-d57a-57f6-80aa-abfe5b98b5bc"
    },
    {
       "name":"Rhet-Crop Spearmaster",
       "manaCost":"{2}{W}",
       "cmc":3,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Human Warrior",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human",
          "Warrior"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"You may exert Rhet-Crop Spearmaster as it attacks. When you do, it gets +1/+0 and gains first strike until end of turn. (An exerted creature won't untap during your next untap step.)",
       "flavor":"\"In the afterlife, I'll have no need of sleep. And until then, I have no time for it!\"",
       "artist":"Dan Scott",
       "number":"26",
       "power":"3",
       "toughness":"1",
       "layout":"normal",
       "multiverseid":"426728",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426728&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature."
          },
          {
             "date":"2017-04-18",
             "text":"If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything."
          },
          {
             "date":"2017-04-18",
             "text":"If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step."
          },
          {
             "date":"2017-04-18",
             "text":"All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared."
          }
       ],
       "foreignNames":[
          {
             "name":"Speermeister der Rhet-Saat",
             "text":"Du kannst den Speermeister der Rhet-Saat erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +1/+0 und Erstschlag bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)",
             "type":"Kreatur — Mensch, Krieger",
             "flavor":"„Im Jenseits brauche ich keinen Schlaf und hier habe ich keine Zeit dafür!\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426997&type=card",
             "language":"German",
             "multiverseid":426997
          },
          {
             "name":"Lancero de la simiente Rhet",
             "text":"Puedes espolear al Lancero de la simiente Rhet en cuanto ataque. Cuando lo hagas, obtiene +1/+0 y gana la habilidad de dañar primero hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)",
             "type":"Criatura — Guerrero humano",
             "flavor":"\"En el más allá no tendré necesidad de dormir. Hasta entonces, no tengo tiempo para ello\".",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427266&type=card",
             "language":"Spanish",
             "multiverseid":427266
          },
          {
             "name":"Maître lancier de la moisson Rhet",
             "text":"Vous pouvez surmener le Maître lancier de la moisson Rhet au moment où il attaque. Quand vous faites ainsi, il gagne +1/+0 et acquiert l'initiative jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
             "type":"Créature : humain et guerrier",
             "flavor":"« Dans l'au-delà, je n'aurai pas besoin de dormir. Et d'ici là, je n'en ai pas le temps ! »",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427535&type=card",
             "language":"French",
             "multiverseid":427535
          },
          {
             "name":"Lanciere della Messe Rhet",
             "text":"Puoi stremare il Lanciere della Messe Rhet mentre attacca. Quando lo fai, prende +1/+0 e ha attacco improvviso fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
             "type":"Creatura — Guerriero Umano",
             "flavor":"\"Nell'aldilà non avrò bisogno di dormire. E fino ad allora, non avrò tempo di farlo!\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427804&type=card",
             "language":"Italian",
             "multiverseid":427804
          },
          {
             "name":"レト一門の槍の達人",
             "text":"レト一門の槍の達人が攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋１/＋０の修整を受けるとともに先制攻撃を得る。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）",
             "type":"クリーチャー — 人間・戦士",
             "flavor":"「来世では眠る必要はない。その時までは眠る暇などない。」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428073&type=card",
             "language":"Japanese",
             "multiverseid":428073
          },
          {
             "name":"레트 입문자 창술가",
             "text":"당신은 레트 입문자 창술가로 공격을 선언하면서 레트 입문자 창술가를 분전시킬 수 있다. 그렇게 할 때, 레트 입문자 창술가는 턴종료까지 +1/+0을 받고 선제공격을 얻는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)",
             "type":"생물 — 인간 전사",
             "flavor":"\"사후 세계에서는 잠잘 필요가 없어. 그리고 거기 가기 전까진 잠잘 시간이 없고!\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428342&type=card",
             "language":"Korean",
             "multiverseid":428342
          },
          {
             "name":"Mestre da Lança da Safra Rhet",
             "text":"Você pode exaurir Mestre da Lança da Safra Rhet conforme ele ataca. Quando você faz isso, ele recebe +1/+0 e ganha iniciativa até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)",
             "type":"Criatura — Humano Guerreiro",
             "flavor":"\"Na vida após a morte eu não vou precisar dormir. E, até lá, eu não tenho tempo para isso!\"",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428611&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428611
          },
          {
             "name":"Копьеносец Снопа Рет",
             "text":"Вы можете подстегнуть Копьеносца Снопа Рет в момент его атаки. Когда вы это делаете, он получает +1/+0 и Первый удар до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)",
             "type":"Существо — Человек Воин",
             "flavor":"«В загробной жизни мне не нужно будет спать. А до тех пор у меня на сон нет времени».",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428880&type=card",
             "language":"Russian",
             "multiverseid":428880
          },
          {
             "name":"雷特祀群矛手",
             "text":"你可以于雷特祀群矛手攻击时耗竭之。当你如此作时，直到回合结束，它得+1/+0且获得先攻异能。（已耗竭的生物于你的下一个重置步骤中不能重置。）",
             "type":"生物～人类／战士",
             "flavor":"「到了来世，就没必要休息。还没争到来世前，我没时间休息！」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429149&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429149
          },
          {
             "name":"雷特祀群矛手",
             "text":"你可以於雷特祀群矛手攻擊時耗竭之。當你如此作時，直到回合結束，它得+1/+0且獲得先攻異能。（已耗竭的生物於你的下一個重置步驟中不能重置。）",
             "type":"生物～人類／戰士",
             "flavor":"「到了來世，就沒必要休息。還沒爭到來世前，我沒時間休息！」",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429418&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429418
          }
       ],
       "printings":[
          "AKH",
          "MB1"
       ],
       "originalText":"You may exert Rhet-Crop Spearmaster as it attacks. When you do, it gets +1/+0 and gains first strike until end of turn. (An exerted creature won't untap during your next untap step.)",
       "originalType":"Creature - Human Warrior",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"96b26caf-3f6b-5b39-aefd-440f2b4c210c"
    },
    {
       "name":"Temmet, Vizier of Naktamun",
       "manaCost":"{W}{U}",
       "cmc":2,
       "colors":[
          "U",
          "W"
       ],
       "colorIdentity":[
          "U",
          "W"
       ],
       "type":"Legendary Creature — Human Cleric",
       "supertypes":[
          "Legendary"
       ],
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Human",
          "Cleric"
       ],
       "rarity":"Rare",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"At the beginning of combat on your turn, target creature token you control gets +1/+1 until end of turn and can't be blocked this turn.\nEmbalm {3}{W}{U} ({3}{W}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Human Cleric with no mana cost. Embalm only as a sorcery.)",
       "artist":"Anna Steinbauer",
       "number":"207",
       "power":"2",
       "toughness":"2",
       "layout":"normal",
       "multiverseid":"426909",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426909&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token."
          },
          {
             "date":"2017-04-18",
             "text":"The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard."
          },
          {
             "date":"2017-04-18",
             "text":"The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its converted mana cost is 0. These are copiable values of the token that other effects may copy."
          },
          {
             "date":"2017-07-14",
             "text":"If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so."
          },
          {
             "date":"2017-07-14",
             "text":"Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion."
          }
       ],
       "foreignNames":[
          {
             "name":"Temmet, Wesir von Naktamun",
             "text":"Zu Beginn des Kampfes in deinem Zug erhält ein Kreaturenspielstein deiner Wahl, den du kontrollierst, +1/+1 bis zum Ende des Zuges und kann in diesem Zug nicht geblockt werden.\nEinbalsamieren {3}{W}{U} ({3}{W}{U}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er ein weißer Zombie-Mensch-Kleriker ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)",
             "type":"Legendäre Kreatur — Mensch, Kleriker",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427178&type=card",
             "language":"German",
             "multiverseid":427178
          },
          {
             "name":"Temmet, visir de Naktamun",
             "text":"Al comienzo del combate en tu turno, la ficha de criatura objetivo que controlas obtiene +1/+1 hasta el final del turno y no puede ser bloqueada este turno.\nEmbalsamar {3}{W}{U}. ({3}{W}{U}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Clérigo Humano Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)",
             "type":"Criatura legendaria — Clérigo humano",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427447&type=card",
             "language":"Spanish",
             "multiverseid":427447
          },
          {
             "name":"Temmet, vizir de Naktamon",
             "text":"Au début du combat pendant votre tour, un jeton de créature ciblé que vous contrôlez gagne +1/+1 jusqu'à la fin du tour et ne peut pas être bloqué ce tour-ci.\nEmbaumement {3}{W}{U} ({3}{W}{U}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et humain et clerc blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
             "type":"Créature légendaire : humain et clerc",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427716&type=card",
             "language":"French",
             "multiverseid":427716
          },
          {
             "name":"Temmet, Visir di Naktamun",
             "text":"All'inizio del combattimento nel tuo turno, una pedina creatura bersaglio che controlli prende +1/+1 fino alla fine del turno e non può essere bloccata in questo turno.\nImbalsamare {3}{W}{U} ({3}{W}{U}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Chierico Umano Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)",
             "type":"Creatura Leggendaria — Chierico Umano",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427985&type=card",
             "language":"Italian",
             "multiverseid":427985
          },
          {
             "name":"ナクタムンの侍臣、テムメト",
             "text":"あなたのターンの戦闘の開始時に、あなたがコントロールするクリーチャー・トークン１体を対象とする。ターン終了時まで、それは＋１/＋１の修整を受けるとともに、このターン、それはブロックされない。\n不朽{3}{W}{U}（{3}{W}{U}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・人間・クレリックであることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）",
             "type":"伝説のクリーチャー — 人間・クレリック",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428254&type=card",
             "language":"Japanese",
             "multiverseid":428254
          },
          {
             "name":"나크타문의 고관 테멧",
             "text":"당신의 턴 전투 시작에, 당신이 조종하는 생물 토큰을 목표로 정한다. 그 생물 토큰은 턴종료까지 +1/+1을 받고 이 턴에 방어될 수 없다.\n방부처리 {3}{W}{U} ({3}{W}{U}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 인간 성직자다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)",
             "type":"전설적 생물 — 인간 성직자",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428523&type=card",
             "language":"Korean",
             "multiverseid":428523
          },
          {
             "name":"Temmet, Vizir de Nactamon",
             "text":"No início do combate em seu turno, a ficha de criatura alvo que você controla recebe +1/+1 até o final do turno e não pode ser bloqueada neste turno.\nEmbalsamar {3}{W}{U} ({3}{W}{U}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Humano Clérigo branco sem custo de mana. Embalsame somente como um feitiço.)",
             "type":"Criatura Lendária — Humano Clérigo",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428792&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428792
          },
          {
             "name":"Теммет, Визирь Нактамуна",
             "text":"В начале боя во время вашего хода целевая фишка существа под вашим контролем получает +1/+1 до конца хода и не может быть заблокирована в этом ходу.\nБальзамирование {3}{W}{U} ({3}{W}{U}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белым Зомби Человеком Священником без мана-стоимости. Бальзамируйте только как волшебство.)",
             "type":"Легендарное Существо — Человек Священник",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429061&type=card",
             "language":"Russian",
             "multiverseid":429061
          },
          {
             "name":"拿塔蒙维齐尔蒂穆特",
             "text":"在你回合的战斗开始时，目标由你操控的衍生生物得+1/+1直到回合结束，且本回合不能被阻挡。\n遗存{3}{W}{U}（{3}{W}{U}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／人类／僧侣，且没有法术力费用。遗存的时机视同法术。）",
             "type":"传奇生物～人类／僧侣",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429330&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429330
          },
          {
             "name":"拿塔蒙維齊爾蒂穆特",
             "text":"在你回合的戰鬥開始時，目標由你操控的衍生生物得+1/+1直到回合結束，且本回合不能被阻擋。\n遺存{3}{W}{U}（{3}{W}{U}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／人類／僧侶，且沒有魔法力費用。遺存的時機視同巫術。）",
             "type":"傳奇生物～人類／僧侶",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429599&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429599
          }
       ],
       "printings":[
          "AKH",
          "AKR",
          "PAKH"
       ],
       "originalText":"At the beginning of combat on your turn, target creature token you control gets +1/+1 until end of turn and can't be blocked this turn.\nEmbalm {3}{W}{U} ({3}{W}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Human Cleric with no mana cost. Embalm only as a sorcery.)",
       "originalType":"Legendary Creature - Human Cleric",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"923ad903-d63c-5555-b874-9c6848bd73f8"
    },
    {
       "name":"Angler Drake",
       "manaCost":"{4}{U}{U}",
       "cmc":6,
       "colors":[
          "U"
       ],
       "colorIdentity":[
          "U"
       ],
       "type":"Creature — Drake",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Drake"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"Flying\nWhen Angler Drake enters the battlefield, you may return target creature to its owner's hand.",
       "flavor":"From the time they are hatchlings, river drakes are taught to pull the largest prey from the Luxa.",
       "artist":"Svetlin Velinov",
       "number":"41",
       "power":"4",
       "toughness":"4",
       "layout":"normal",
       "multiverseid":"426743",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426743&type=card",
       "foreignNames":[
          {
             "name":"Angler-Sceada",
             "text":"Fliegend\nWenn der Angler-Sceada ins Spiel kommt, kannst du eine Kreatur deiner Wahl auf die Hand ihres Besitzers zurückbringen.",
             "type":"Kreatur — Sceada",
             "flavor":"Gleich nachdem sie schlüpfen, wird ihnen beigebracht, nur die größten Beutetiere aus dem Luxa zu fischen.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427012&type=card",
             "language":"German",
             "multiverseid":427012
          },
          {
             "name":"Draco pescador",
             "text":"Vuela.\nCuando el Draco pescador entre al campo de batalla, puedes regresar la criatura objetivo a la mano de su propietario.",
             "type":"Criatura — Draco",
             "flavor":"Desde que son simplemente unas crías, a los dracos de río se les enseña a sacar la presa más grande del Luxa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427281&type=card",
             "language":"Spanish",
             "multiverseid":427281
          },
          {
             "name":"Drakôn pêcheur",
             "text":"Vol\nQuand le Drakôn pêcheur arrive sur le champ de bataille, vous pouvez renvoyer une créature ciblée dans la main de son propriétaire.",
             "type":"Créature : drakôn",
             "flavor":"Les drakôns de rivière apprennent dès leur plus jeune âge à pêcher les plus grosses proies du Luxa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427550&type=card",
             "language":"French",
             "multiverseid":427550
          },
          {
             "name":"Draghetto Pescatore",
             "text":"Volare\nQuando il Draghetto Pescatore entra nel campo di battaglia, puoi far tornare una creatura bersaglio in mano al suo proprietario.",
             "type":"Creatura — Draghetto",
             "flavor":"Fin dai primi mesi di vita, ai draghetti di fiume viene insegnato a catturare prede enormi nel Luxa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427819&type=card",
             "language":"Italian",
             "multiverseid":427819
          },
          {
             "name":"釣りドレイク",
             "text":"飛行\n釣りドレイクが戦場に出たとき、クリーチャー１体を対象とする。あなたはそれをオーナーの手札に戻してもよい。",
             "type":"クリーチャー — ドレイク",
             "flavor":"雛の時分から、川ドレイクはルクサ川最大の獲物を釣り上げる方法を教わる。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428088&type=card",
             "language":"Japanese",
             "multiverseid":428088
          },
          {
             "name":"낚시꾼 드레이크",
             "text":"비행\n낚시꾼 드레이크가 전장에 들어올 때, 생물을 목표로 정한다. 당신은 그 생물을 소유자의 손으로 되돌릴 수 있다.",
             "type":"생물 — 드레이크",
             "flavor":"강 드레이크는 새끼 때부터 럭사의 가장 큰 먹잇감을 사냥하는 법을 배운다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428357&type=card",
             "language":"Korean",
             "multiverseid":428357
          },
          {
             "name":"Dragonete Pescador",
             "text":"Voar\nQuando Dragonete Pescador entra no campo de batalha, você pode devolver a criatura alvo para a mão de seu dono.",
             "type":"Criatura — Dragonete",
             "flavor":"Desde que são apenas filhotes, os dragonetes do rio são ensinados a pescar as maiores presas do Luxa.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428626&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428626
          },
          {
             "name":"Дрейк-Рыболов",
             "text":"Полет\nКогда Дрейк-Рыболов выходит на поле битвы, вы можете вернуть целевое существо в руку его владельца.",
             "type":"Существо — Дрейк",
             "flavor":"Еще детенышами речных дрейков учат добывать из Луксы добычу покрупнее.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428895&type=card",
             "language":"Russian",
             "multiverseid":428895
          },
          {
             "name":"渔猎龙兽",
             "text":"飞行\n当渔猎龙兽进战场时，你可以将目标生物移回其拥有者手上。",
             "type":"生物～龙兽",
             "flavor":"河龙兽从出生的那一刻起，便学着从罗夏河捕捞最肥的猎物。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429164&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429164
          },
          {
             "name":"漁獵龍獸",
             "text":"飛行\n當漁獵龍獸進戰場時，你可以將目標生物移回其擁有者手上。",
             "type":"生物～龍獸",
             "flavor":"河龍獸從出生的那一刻起，便學著從羅夏河捕撈最肥的獵物。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429433&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429433
          }
       ],
       "printings":[
          "AKH",
          "GN3"
       ],
       "originalText":"Flying\nWhen Angler Drake enters the battlefield, you may return target creature to its owner's hand.",
       "originalType":"Creature - Drake",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Restricted"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"59720bf9-6333-56a2-bb6f-23b6dd87ed3e"
    },
    {
       "name":"Defiant Greatmaw",
       "manaCost":"{2}{G}",
       "cmc":3,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Hippo",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Hippo"
       ],
       "rarity":"Uncommon",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Defiant Greatmaw enters the battlefield, put two -1/-1 counters on target creature you control.\nWhenever you put one or more -1/-1 counters on Defiant Greatmaw, remove a -1/-1 counter from another target creature you control.",
       "artist":"Deruchenko Alexander",
       "number":"163",
       "power":"4",
       "toughness":"5",
       "layout":"normal",
       "multiverseid":"426865",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426865&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"If you put enough -1/-1 counters on Defiant Greatmaw so that its toughness is 0 or less, its last ability triggers."
          },
          {
             "date":"2017-04-18",
             "text":"If a creature with wither or infect deals damage to a creature, the controller of the creature with wither or infect puts that many -1/-1 counters on the second creature."
          }
       ],
       "foreignNames":[
          {
             "name":"Trotzendes Riesenmaul",
             "text":"Wenn das Trotzende Riesenmaul ins Spiel kommt, lege zwei -1/-1-Marken auf eine Kreatur deiner Wahl, die du kontrollierst.\nImmer wenn du eine oder mehrere -1/-1-Marken auf das Trotzende Riesenmaul legst, entferne eine -1/-1-Marke von einer anderen Kreatur deiner Wahl, die du kontrollierst.",
             "type":"Kreatur — Flusspferd",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427134&type=card",
             "language":"German",
             "multiverseid":427134
          },
          {
             "name":"Granfauces desafiante",
             "text":"Cuando el Granfauces desafiante entre al campo de batalla, pon dos contadores -1/-1 sobre la criatura objetivo que controlas.\nSiempre que pongas uno o más contadores -1/-1 sobre el Granfauces desafiante, remueve un contador -1/-1 de otra criatura objetivo que controlas.",
             "type":"Criatura — Hipopótamo",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427403&type=card",
             "language":"Spanish",
             "multiverseid":427403
          },
          {
             "name":"Gueule du fleuve provocatrice",
             "text":"Quand la Gueule du fleuve provocatrice arrive sur le champ de bataille, mettez deux marqueurs -1/-1 sur une créature ciblée que vous contrôlez.\nÀ chaque fois que vous mettez au moins un marqueur -1/-1 sur la Gueule du fleuve provocatrice, retirez un marqueur -1/-1 d'une autre créature ciblée que vous contrôlez.",
             "type":"Créature : hippopotame",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427672&type=card",
             "language":"French",
             "multiverseid":427672
          },
          {
             "name":"Granfauce Sprezzante",
             "text":"Quando il Granfauce Sprezzante entra nel campo di battaglia, metti due segnalini -1/-1 su una creatura bersaglio che controlli.\nOgniqualvolta metti uno o più segnalini -1/-1 sul Granfauce Sprezzante, rimuovi un segnalino -1/-1 da un'altra creatura bersaglio che controlli.",
             "type":"Creatura — Ippopotamo",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427941&type=card",
             "language":"Italian",
             "multiverseid":427941
          },
          {
             "name":"好戦的な巨口",
             "text":"好戦的な巨口が戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを２個置く。\nあなたが好戦的な巨口の上に－１/－１カウンターを１個以上置くたび、あなたがコントロールする他のクリーチャー１体を対象とし、それの上から－１/－１カウンターを１個取り除く。",
             "type":"クリーチャー — カバ",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428210&type=card",
             "language":"Japanese",
             "multiverseid":428210
          },
          {
             "name":"거만한 큰입하마",
             "text":"거만한 큰입하마가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 두 개를 올려놓는다.\n거만한 큰입하마에 -1/-1 카운터를 한 개 이상 올려놓을 때마다, 당신이 조종하는 다른 생물을 목표로 정한다. 그 생물에서 -1/-1 카운터 한 개를 제거한다.",
             "type":"생물 — 하마",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428479&type=card",
             "language":"Korean",
             "multiverseid":428479
          },
          {
             "name":"Gorja-mor Audaz",
             "text":"Quando Gorja-mor Audaz entrar no campo de batalha, coloque dois marcadores -1/-1 na criatura alvo que você controla.\nToda vez que você colocar um ou mais marcadores -1/-1 em Gorja-mor Audaz, remova um marcador -1/-1 de outra criatura alvo que você controla.",
             "type":"Criatura — Hipopótamo",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428748&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428748
          },
          {
             "name":"Непокорный Проглот",
             "text":"Когда Непокорный Проглот выходит на поле битвы, положите два жетона -1/-1 на целевое существо под вашим контролем.\nКаждый раз, когда вы кладете один или несколько жетонов -1/-1 на Непокорного Проглота, удалите один жетон -1/-1 с другого целевого существа под вашим контролем.",
             "type":"Существо — Бегемот",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429017&type=card",
             "language":"Russian",
             "multiverseid":429017
          },
          {
             "name":"无畏巨河马",
             "text":"当无畏巨河马进战场时，在目标由你操控的生物上放置两个-1/-1指示物。\n每当你在无畏巨河马上放置一个或数个-1/-1指示物时，从另一个目标由你操控的生物上移去一个-1/-1指示物。",
             "type":"生物～河马",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429286&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429286
          },
          {
             "name":"無畏巨河馬",
             "text":"當無畏巨河馬進戰場時，在目標由你操控的生物上放置兩個-1/-1指示物。\n每當你在無畏巨河馬上放置一個或數個-1/-1指示物時，從另一個目標由你操控的生物上移去一個-1/-1指示物。",
             "type":"生物～河馬",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429555&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429555
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Defiant Greatmaw enters the battlefield, put two -1/-1 counters on target creature you control.\nWhenever you put one or more -1/-1 counters on Defiant Greatmaw, remove a -1/-1 counter from another target creature you control.",
       "originalType":"Creature - Hippo",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Restricted"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"6dd41a0e-bbfc-5f28-8cac-e84d40fae967"
    },
    {
       "name":"Soulstinger",
       "manaCost":"{3}{B}",
       "cmc":4,
       "colors":[
          "B"
       ],
       "colorIdentity":[
          "B"
       ],
       "type":"Creature — Scorpion Demon",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Scorpion",
          "Demon"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Soulstinger enters the battlefield, put two -1/-1 counters on target creature you control.\nWhen Soulstinger dies, you may put a -1/-1 counter on target creature for each -1/-1 counter on Soulstinger.",
       "artist":"Mike Burns",
       "number":"108",
       "power":"4",
       "toughness":"5",
       "layout":"normal",
       "multiverseid":"426810",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426810&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"Soulstinger’s second ability targets one creature to get all the counters. You can’t distribute the counters among multiple creatures."
          }
       ],
       "foreignNames":[
          {
             "name":"Seelendurchstecher",
             "text":"Wenn der Seelendurchstecher ins Spiel kommt, lege zwei -1/-1-Marken auf eine Kreatur deiner Wahl, die du kontrollierst.\nWenn der Seelendurchstecher stirbt, kannst du für jede -1/-1-Marke auf ihm eine -1/-1-Marke auf eine Kreatur deiner Wahl legen.",
             "type":"Kreatur — Skorpion, Dämon",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427079&type=card",
             "language":"German",
             "multiverseid":427079
          },
          {
             "name":"Aguijoneador de almas",
             "text":"Cuando el Aguijoneador de almas entre al campo de batalla, pon dos contadores -1/-1 sobre la criatura objetivo que controlas.\nCuando el Aguijoneador de almas muera, puedes poner un contador -1/-1 sobre la criatura objetivo por cada contador -1/-1 sobre el Aguijoneador de almas.",
             "type":"Criatura — Demonio escorpión",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427348&type=card",
             "language":"Spanish",
             "multiverseid":427348
          },
          {
             "name":"Pique-âme",
             "text":"Quand le Pique-âme arrive sur le champ de bataille, mettez deux marqueurs -1/-1 sur une créature ciblée que vous contrôlez.\nQuand le Pique-âme meurt, vous pouvez mettre un marqueur -1/-1 sur une créature ciblée pour chaque marqueur -1/-1 sur le Pique-âme.",
             "type":"Créature : scorpion et démon",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427617&type=card",
             "language":"French",
             "multiverseid":427617
          },
          {
             "name":"Pungitore di Anime",
             "text":"Quando il Pungitore di Anime entra nel campo di battaglia, metti due segnalini -1/-1 su una creatura bersaglio che controlli.\nQuando il Pungitore di Anime muore, puoi mettere un segnalino -1/-1 su una creatura bersaglio per ogni segnalino -1/-1 sul Pungitore di Anime.",
             "type":"Creatura — Demone Scorpione",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427886&type=card",
             "language":"Italian",
             "multiverseid":427886
          },
          {
             "name":"魂刺し",
             "text":"魂刺しが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを２個置く。\n魂刺しが死亡したとき、クリーチャー１体を対象とする。あなたはそれの上に－１/－１カウンターを、魂刺しの上に置かれていた－１/－１カウンター１個につき１個置いてもよい。",
             "type":"クリーチャー — 蠍・デーモン",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428155&type=card",
             "language":"Japanese",
             "multiverseid":428155
          },
          {
             "name":"영혼칼침꾼",
             "text":"영혼칼침꾼이 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 두 개를 올려놓는다.\n영혼칼침꾼이 죽을 때, 생물을 목표로 정한다. 당신은 영혼칼침꾼에 올려진 -1/-1 카운터 수만큼 그 생물에 -1/-1 카운터를 올려놓을 수 있다.",
             "type":"생물 — 전갈 악마",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428424&type=card",
             "language":"Korean",
             "multiverseid":428424
          },
          {
             "name":"Picador de Almas",
             "text":"Quando Picador de Almas entrar no campo de batalha, coloque dois marcadores -1/-1 na criatura alvo que você controla.\nQuando Picador de Almas morre, você pode colocar um marcador -1/-1 na criatura alvo para cada marcador -1/-1 em Picador de Almas.",
             "type":"Criatura — Escorpião Demônio",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428693&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428693
          },
          {
             "name":"Уязвитель Душ",
             "text":"Когда Уязвитель Душ выходит на поле битвы, положите два жетона -1/-1 на целевое существо под вашим контролем.\nКогда Уязвитель Душ умирает, вы можете положить один жетон -1/-1 на целевое существо за каждый жетон 1/-1 на Уязвителе Душ.",
             "type":"Существо — Скорпион Демон",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428962&type=card",
             "language":"Russian",
             "multiverseid":428962
          },
          {
             "name":"刺灵魔",
             "text":"当刺灵魔进战场时，在目标由你操控的生物上放置两个-1/-1指示物。\n当刺灵魔死去时，你可以在目标生物上放置若干-1/-1指示物，其数量等同于刺灵魔上-1/-1指示物的数量。",
             "type":"生物～蝎子／恶魔",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429231&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429231
          },
          {
             "name":"刺靈魔",
             "text":"當刺靈魔進戰場時，在目標由你操控的生物上放置兩個-1/-1指示物。\n當刺靈魔死去時，你可以在目標生物上放置若干-1/-1指示物，其數量等同於刺靈魔上-1/-1指示物的數量。",
             "type":"生物～蠍子／惡魔",
             "flavor":null,
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429500&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429500
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Soulstinger enters the battlefield, put two -1/-1 counters on target creature you control.\nWhen Soulstinger dies, you may put a -1/-1 counter on target creature for each -1/-1 counter on Soulstinger.",
       "originalType":"Creature - Scorpion Demon",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"bedeb789-ef10-55d4-8b25-613426676893"
    },
    {
       "name":"Quarry Hauler",
       "manaCost":"{3}{G}",
       "cmc":4,
       "colors":[
          "G"
       ],
       "colorIdentity":[
          "G"
       ],
       "type":"Creature — Camel",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Camel"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Quarry Hauler enters the battlefield, for each kind of counter on target permanent, put another counter of that kind on it or remove one from it.",
       "flavor":"They labor beside the anointed, constructing the vast monuments of Naktamun.",
       "artist":"David Gaillet",
       "number":"181",
       "power":"4",
       "toughness":"3",
       "layout":"normal",
       "multiverseid":"426883",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426883&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"You don’t have to make the same choice for each kind of counter. For example, if a Gideon planeswalker has two loyalty counters and three -1/-1 counters on it, you can put another loyalty counter on it and remove a -1/-1 counter from it."
          }
       ],
       "foreignNames":[
          {
             "name":"Steinbruch-Schlepper",
             "text":"Wenn der Steinbruch-Schlepper ins Spiel kommt, erhält eine bleibende Karte deiner Wahl für jede Sorte von Marke, die auf ihr liegt, eine weitere Marke dieser Sorte oder eine Marke dieser Sorte wird von ihr entfernt.",
             "type":"Kreatur — Kamel",
             "flavor":"Sie arbeiten Seite an Seite mit den Gesalbten, um die gigantischen Monumente Naktamuns zu errichten.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427152&type=card",
             "language":"German",
             "multiverseid":427152
          },
          {
             "name":"Porteador de la cantera",
             "text":"Cuando el Porteador de la cantera entre al campo de batalla, por cada tipo de contador sobre el permanente objetivo, pon otro contador de ese tipo sobre él o remueve uno de él.",
             "type":"Criatura — Camello",
             "flavor":"Su labor junto a los ungidos es la de construir los descomunales monumentos de Naktamun.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427421&type=card",
             "language":"Spanish",
             "multiverseid":427421
          },
          {
             "name":"Transporteur des carrières",
             "text":"Quand le Transporteur des carrières arrive sur le champ de bataille, pour chaque type de marqueur sur le permanent ciblé, mettez un autre marqueur de ce type sur lui ou retirez-lui en un.",
             "type":"Créature : chameau",
             "flavor":"Il travaille aux côtés de ceux qui ont été consacrés, érigeant les impressionnants monuments de Naktamon.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427690&type=card",
             "language":"French",
             "multiverseid":427690
          },
          {
             "name":"Bestia da Carico della Cava",
             "text":"Quando la Bestia da Carico della Cava entra nel campo di battaglia, per ogni tipo di segnalino su un permanente bersaglio, metti un altro segnalino di quel tipo su di esso o rimuovine uno da esso.",
             "type":"Creatura — Cammello",
             "flavor":"Lavorano a fianco dei consacrati per costruire i grandiosi monumenti di Naktamun.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427959&type=card",
             "language":"Italian",
             "multiverseid":427959
          },
          {
             "name":"採石場の運び屋",
             "text":"採石場の運び屋が戦場に出たとき、パーマネント１つを対象とし、それの上に置かれているカウンター１種類につきそれぞれ、その種類のカウンターをそれの上にもう１個置くかそれの上から１個取り除く。",
             "type":"クリーチャー — ラクダ",
             "flavor":"選定された者とともに働き、ナクタムンの巨大な碑を築く。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428228&type=card",
             "language":"Japanese",
             "multiverseid":428228
          },
          {
             "name":"채석장 운반꾼",
             "text":"채석장 운반꾼이 전장에 들어올 때, 지속물을 목표로 정한다. 그 지속물에 놓여 있는 각 카운터 종류 하나당, 그 지속물에 같은 종류의 카운터 한 개를 올려놓거나 카운터 한 개를 제거한다.",
             "type":"생물 — 낙타",
             "flavor":"낙타들은 세례받은 자들 옆에서 일하며 나크타문의 방대한 기념비들을 건설한다.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428497&type=card",
             "language":"Korean",
             "multiverseid":428497
          },
          {
             "name":"Carregador da Pedreira",
             "text":"Quando Carregador da Pedreira entrar no campo de batalha, para cada tipo de marcador na permanente alvo, coloque nela outro marcador daquele tipo ou remova um.",
             "type":"Criatura — Camelo",
             "flavor":"Eles trabalham ao lado dos ungidos, construindo os vastos monumentos de Nactamon.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428766&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428766
          },
          {
             "name":"Тяжеловоз с Каменоломни",
             "text":"Когда Тяжеловоз с Каменоломни выходит на поле битвы, за каждый вид жетонов на целевом перманенте положите на него еще один жетон такого вида или удалите с него один такой жетон.",
             "type":"Существо — Верблюд",
             "flavor":"Они трудятся вместе с умащенными, возводя колоссальные монументы Нактамуна.",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429035&type=card",
             "language":"Russian",
             "multiverseid":429035
          },
          {
             "name":"驮石骆驼",
             "text":"当驮石骆驼进战场时，对目标永久物上每种指示物而言，在其上放置另一个该种类的指示物或从其上移去一个该种类的指示物。",
             "type":"生物～骆驼",
             "flavor":"拿塔蒙各处庞大纪念碑的建筑工地上，都有它们与圣洗者的劳作身影。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429304&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429304
          },
          {
             "name":"馱石駱駝",
             "text":"當馱石駱駝進戰場時，對目標永久物上每種指示物而言，在其上放置另一個該種類的指示物或從其上移去一個該種類的指示物。",
             "type":"生物～駱駝",
             "flavor":"拿塔蒙各處龐大紀念碑的建築工地上，都有牠們與聖洗者的勞作身影。",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429573&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429573
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Quarry Hauler enters the battlefield, for each kind of counter on target permanent, put another counter of that kind on it or remove one from it.",
       "originalType":"Creature - Camel",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"2deccebb-9105-53ec-8e30-39a0fcab837a"
    },
    {
       "name":"Supply Caravan",
       "manaCost":"{4}{W}",
       "cmc":5,
       "colors":[
          "W"
       ],
       "colorIdentity":[
          "W"
       ],
       "type":"Creature — Camel",
       "types":[
          "Creature"
       ],
       "subtypes":[
          "Camel"
       ],
       "rarity":"Common",
       "set":"AKH",
       "setName":"Amonkhet",
       "text":"When Supply Caravan enters the battlefield, if you control a tapped creature, create a 1/1 white Warrior creature token with vigilance.",
       "flavor":"\"We each have a weight to carry on the road to the afterlife.\"\n—Oketra, god of solidarity",
       "artist":"Nils Hamm",
       "number":"30",
       "power":"3",
       "toughness":"5",
       "layout":"normal",
       "multiverseid":"426732",
       "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426732&type=card",
       "rulings":[
          {
             "date":"2017-04-18",
             "text":"If you don’t control a tapped creature as Supply Caravan enters the battlefield, its ability doesn’t trigger, even if you can tap a creature right away. If you control no tapped creatures as the ability resolves, nothing happens."
          },
          {
             "date":"2017-04-18",
             "text":"If an effect causes Supply Caravan to enter the battlefield tapped, it will satisfy its own triggered ability."
          }
       ],
       "foreignNames":[
          {
             "name":"Versorgungskarawane",
             "text":"Wenn die Versorgungskarawane ins Spiel kommt und falls du eine getappte Kreatur kontrollierst, erzeuge einen 1/1 weißen Krieger-Kreaturenspielstein mit Wachsamkeit.",
             "type":"Kreatur — Kamel",
             "flavor":"„Jeder hat seinen Teil auf dem Weg ins Jenseits beizutragen.\" —Oketra, Göttin des Zusammenhalts",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427001&type=card",
             "language":"German",
             "multiverseid":427001
          },
          {
             "name":"Caravana de suministros",
             "text":"Cuando la Caravana de suministros entre al campo de batalla, si controlas una criatura girada, crea una ficha de criatura Guerrero blanca 1/1 con la habilidad de vigilancia.",
             "type":"Criatura — Camello",
             "flavor":"\"Todos tenemos un peso que cargar en el camino al más allá\". —Oketra, diosa de la solidaridad",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427270&type=card",
             "language":"Spanish",
             "multiverseid":427270
          },
          {
             "name":"Caravane de marchandises",
             "text":"Quand la Caravane de marchandises arrive sur le champ de bataille, si vous contrôlez une créature engagée, créez un jeton de créature 1/1 blanche Guerrier avec la vigilance.",
             "type":"Créature : chameau",
             "flavor":"« Nous avons tous un fardeau à porter sur la route vers l'au-delà. » —Oketra, déesse de la Solidarité",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427539&type=card",
             "language":"French",
             "multiverseid":427539
          },
          {
             "name":"Carovana di Rifornimenti",
             "text":"Quando la Carovana di Rifornimenti entra nel campo di battaglia, se controlli una creatura TAPpata, crea una pedina creatura Guerriero 1/1 bianca con cautela.",
             "type":"Creatura — Cammello",
             "flavor":"\"Abbiamo tutti un fardello da portare lungo il cammino che ci conduce all'aldilà.\" —Oketra, dea della fratellanza",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427808&type=card",
             "language":"Italian",
             "multiverseid":427808
          },
          {
             "name":"補給の隊商",
             "text":"補給の隊商が戦場に出たとき、あなたがタップ状態のクリーチャーをコントロールしている場合、警戒を持つ白の１/１の戦士・クリーチャー・トークンを１体生成する。",
             "type":"クリーチャー — ラクダ",
             "flavor":"「各々、来世まで持って行く重荷があるのだ。」 ――結束の神、オケチラ",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428077&type=card",
             "language":"Japanese",
             "multiverseid":428077
          },
          {
             "name":"물자수송 대상단",
             "text":"물자수송 대상단이 전장에 들어올 때, 당신이 탭된 생물을 조종한다면, 경계를 가진 1/1 백색 전사 생물 토큰 한 개를 만든다.",
             "type":"생물 — 낙타",
             "flavor":"\"각자에게는 사후 세계로 갈 때 짊어질 짐이 있다.\" —결속의 신 오케트라",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428346&type=card",
             "language":"Korean",
             "multiverseid":428346
          },
          {
             "name":"Caravana de Suprimentos",
             "text":"Quando Caravana de Suprimentos entrar no campo de batalha, se você controlar uma criatura virada, crie uma ficha de criatura branca 1/1 do tipo Guerreiro com vigilância.",
             "type":"Criatura — Camelo",
             "flavor":"\"Cada um de nós tem um peso a carregar na estrada rumo à vida após a morte.\" — Oketra, deusa da solidariedade",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428615&type=card",
             "language":"Portuguese (Brazil)",
             "multiverseid":428615
          },
          {
             "name":"Караван с Припасами",
             "text":"Когда Караван с Припасами выходит на поле битвы, если под вашим контролем есть повернутое существо, создайте одну фишку существа 1/1 белый Воин с Бдительностью.",
             "type":"Существо — Верблюд",
             "flavor":"«По дороге к загробной жизни каждый из нас должен нести свое бремя». — Окетра, богиня сплоченности",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428884&type=card",
             "language":"Russian",
             "multiverseid":428884
          },
          {
             "name":"补给商队",
             "text":"当补给商队进战场时，若你操控已横置的生物，则派出一个1/1白色，具警戒异能的战士衍生生物。",
             "type":"生物～骆驼",
             "flavor":"「在通往来世的路上，我们都有各自的包袱。」 ～团结之神欧柯塔",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429153&type=card",
             "language":"Chinese Simplified",
             "multiverseid":429153
          },
          {
             "name":"補給商隊",
             "text":"當補給商隊進戰場時，若你操控已橫置的生物，則派出一個1/1白色，具警戒異能的戰士衍生生物。",
             "type":"生物～駱駝",
             "flavor":"「在通往來世的路上，我們都有各自的包袱。」 ～團結之神歐柯塔",
             "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429422&type=card",
             "language":"Chinese Traditional",
             "multiverseid":429422
          }
       ],
       "printings":[
          "AKH",
          "AKR"
       ],
       "originalText":"When Supply Caravan enters the battlefield, if you control a tapped creature, create a 1/1 white Warrior creature token with vigilance.",
       "originalType":"Creature - Camel",
       "legalities":[
          {
             "format":"Commander",
             "legality":"Legal"
          },
          {
             "format":"Duel",
             "legality":"Legal"
          },
          {
             "format":"Explorer",
             "legality":"Legal"
          },
          {
             "format":"Gladiator",
             "legality":"Legal"
          },
          {
             "format":"Historic",
             "legality":"Legal"
          },
          {
             "format":"Historicbrawl",
             "legality":"Legal"
          },
          {
             "format":"Legacy",
             "legality":"Legal"
          },
          {
             "format":"Modern",
             "legality":"Legal"
          },
          {
             "format":"Oathbreaker",
             "legality":"Legal"
          },
          {
             "format":"Pauper",
             "legality":"Legal"
          },
          {
             "format":"Paupercommander",
             "legality":"Legal"
          },
          {
             "format":"Penny",
             "legality":"Legal"
          },
          {
             "format":"Pioneer",
             "legality":"Legal"
          },
          {
             "format":"Vintage",
             "legality":"Legal"
          }
       ],
       "id":"5a25b6d6-a640-5aa4-ba99-183736aad45f"
    }
 ]

  constructor(private mtgService: MtgService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.handleSets()
  }

  handleSets(){
    this.mtgService.setsResponse$.subscribe((sets: Sets | undefined) => {
      // this.creatureCards = []
      this.setsList = sets?.sets
    });
  }

  getBoosterBySet(set: Set, firstCall = true){
    this.mtgService.showSpinner()
    this.openSnackBar('Abrindo seus boosters. Aguarde...', 'center')
    console.log('this.creatureCards', JSON.stringify(this.creatureCards))
    if(this.creatureCards.length >= 30 && !firstCall) {
      this._snackBar.dismiss()
      this.mtgService.hideSpinner()
      return
    }

    this.mtgService.getBoosterBySetId(set.code).subscribe(res => {
      const cards = res.body?.cards || []
      const filteredCreatureCards = cards?.filter(card => card.types?.includes('Creature'))
      if(filteredCreatureCards.length){
        const remainingCards = 30 - this.creatureCards.length;
        const cardsToAdd = filteredCreatureCards.slice(0, remainingCards);
        this.creatureCards.push(...cardsToAdd);
      }
      this.getBoosterBySet(set, false)
    }, (error) => {
      console.log(error)
      this.openSnackBar('Não foi possível encontrar um booster para esse set. Escolha outro.')
      this._snackBar.dismiss()
      this.mtgService.hideSpinner()
    }, () => {
      if(this.creatureCards.length >= 30 && !firstCall){
        this._snackBar.dismiss()
        this.mtgService.hideSpinner()
      }
    })
  }

  openSnackBar(msg: string, position: MatSnackBarHorizontalPosition = 'left') {
    this._snackBar.open(msg, 'X', {horizontalPosition: position});
  }
}
