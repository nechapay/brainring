;
Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i --) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
};

window.addEventListener('load', function (e) {
    setTowns();
});

var towns = [
    {
        text: 'Мурманск',
        id: 'myr',
        symb: '•'
    },
    {
        text: 'Петрозаводск',
        id: 'pet',
        symb: '•'
    },
    {
        text: 'Кронштадт',
        id: 'kron',
        symb: '•'
    },
    {
        text: 'Пермь',
        id: 'perm',
        symb: '•'
    },
    {
        text: 'Уссурийск',
        id: 'ussu',
        symb: '•'
    },
    {
        text: 'Екатеринбург',
        id: 'ekt',
        symb: '•'
    },
    {
        text: 'Тюмень',
        id: 'tum',
        symb: '•'
    },
    {
        text: 'Владивосток',
        id: 'vld',
        symb: '•'
    },
    {
        text: 'Оренбург',
        id: 'ore',
        symb: '•'
    },
    {
        text: 'Омск',
        id: 'omsk',
        symb: '•'
    },
    {
        text: 'Кызыл',
        id: 'kzl',
        symb: '•'
    },
    {
        text: 'Санкт Петербург',
        id: 'spet',
        symb: '•'
    },
    {
        text: 'Казань',
        id: 'kaz',
        symb: '•'
    },
    {
        text: 'Тверь',
        id: 'twr',
        symb: '•'
    },
    {
        text: 'Ульяновск',
        id: 'yl',
        symb: '•'
    },
    {
        text: 'Москва',
        id: 'msk',
        symb: '⋆'
    },
    {
        text: 'Тула',
        id: 'tyla',
        symb: '•'
    },
    {
        text: 'Воронеж',
        id: 'vor',
        symb: '•'
    },
    {
        text: 'Ставрополь',
        id: 'sta',
        symb: '•'
    },
    {
        text: 'Аксай',
        id: 'aks',
        symb: '•'
    },
    {
        text: 'Краснодар',
        id: 'krd',
        symb: '•'
    },
    {
        text: 'Владикавказ',
        id: 'vkz',
        symb: '•'
    },
    {
        text: 'Севастополь',
        id: 'sev',
        symb: '•'
    }
];

var category = [
    {
        id: 'cat_1',
        name: 'Военное дело',
        tasks: [
            {
                id: '1_1',
                text: 'Он рассчитал  аэродинамические свойства конструкций до их постройки и испытания в воздухе.<br>  ' +
                    'Он и его ученики положили начало замечательному учреждению, получившему позднее наименование ЦАГИ (Центральный аэрогидродинамический институт).<br><br> ' +
                    'Кто этот ученый?',
                answer: 'Николай Егорович Жуковский'
            },
            {
                id: '1_2',
                text: 'Способ передачи информации, недоступный противнику.',
                answer: 'Шифрование'
            },
            {
                id: '1_3',
                text: 'Назовите три события послевоенного периода, наложившие отпечаток на развитие военного дела.',
                answer: '• Появление ядерного оружия <br>' +
                    '• Создание электронных вычислительных машин <br>' +
                    '• Развитие работ по ракетной технике '
            },
            {
                id: '1_4',
                text: 'В 2016 году об этом подразделении Российской армии европейские газеты писали: «…оно способно без оружия ' +
                    'завоевать всю Европу».<br><br> ' +
                    'Что это за подразделение?',
                answer: 'Академический дважды Краснознамённый, ордена Красной Звезды ансамбль песни и пляски Российской Армии имени А. В. Александрова'
            },
            {
                id: '1_5',
                text: 'Во время Второй мировой войны итальянские самолеты сбрасывали в Суэцкий канал мины.<br> ' +
                    'Союзники считали сколько мин было сброшено, а затем тралили канал, пока не находили их все. ' +
                    'Однако итальянцы сбрасывали не только мины, но и муляжи, которые все равно нужно было выловить, поскольку ' +
                    'во время сброса союзники не могли отличить их на вид от настоящих мин. Больше всего времени у союзников отнимали' +
                    ' муляжи, сделанные из НЕЕ.<br><br> ' +
                    'Назовите ЕЕ.',
                answer: 'Соль'
            },
            {
                id: '1_6',
                text: 'У нас предпочитают делать это «елочкой», в Европе – «бабочкой» или вообще «прямо», ' +
                    'а американские солдаты обязаны делать это «бабочкой наоборот».<br><br>' +
                    'Что же они должны делать?',
                answer: 'Завязывать шнурки'
            },
            {
                id: '1_7',
                text: 'В каком случае снаряд, выпущенный из пушки, улетит дальше: если он выпущен под углом 30° или 60°?',
                answer: 'Одинаково'
            }
        ]
    },
    {
        id: 'cat_2',
        name: 'Из жизни…',
        tasks: [
            {
                id: '2_1',
                text: 'Можно ли  тремя касаниями разделить торт на 8 частей? Если «да», то как это сделать?',
                answer: 'Да.<br>' +
                    'Разрезать двумя касаниями на четыре части, а третий разрез сделать вдоль всего торта'
            },
            {
                id: '2_2',
                text: 'А вы читали произведение «Алиса в стране чудес»? Хорошо если вы с ним знакомы, потому что вам нужно вспомнить ' +
                    'идею, которая пришла в голову Алисы. «Помнится, в один момент, когда Алиса начала сомневаться, что ОНА - это ОНА, ' +
                    'ей в голову пришла идея проверить, знает ли она все то, что знала раньше.<br><br> ' +
                    'И начала она с …..',
                answer: 'Она начала с таблицы умножения'
            },
            {
                id: '2_3',
                text: 'Замените разные буквы разными цифрами, чтобы получилось верное равенство: АБВГ+ДЕЖ=ЗИКЛ.',
                answer: 'Это невозможно. Цифр всего 10, а различных букв здесь – 11.'
            },
            {
                id: '2_4',
                text: 'Один из гимназических преподавателей Короленко имел обыкновение ставить двойки в виде НЕГО. ' +
                    'ОНИ многократно встречаются в интеллектуальных играх и на уроках.<br><br> ' +
                    'Назовите ЕГО двумя словами. ',
                answer: 'Вопросительный знак (знак вопроса).'
            },
            {
                id: '2_5',
                text: 'Монета, номиналом в 20 копеек была ровно в два раза тяжелее монеты в 10 копеек.<br><br>' +
                    'Что стоило дороже: 1 кг 10-копеечных монет или 0,5 кг 20-копеечных?',
                answer: 'Одинаково'
            },
            {
                id: '2_6',
                text: 'Из города А в город Б одновременно выехали мотоциклист и велосипедист. ' +
                    'Скорость мотоциклиста в два раза больше, чем скорость велосипедиста. ' +
                    'Но на середине пути у него сломался мотоцикл, и ему пришлось оставшуюся часть пути идти пешком. ' +
                    'А скорость пешехода в два раза медленнее велосипедиста.<br><br> ' +
                    'Кто из них доберется первым до города Б?',
                answer: 'Велосипедист доедет быстрее'
            },
            {
                id: '2_7',
                text: 'Два лесоруба Иван и Петр сели обедать. У Ивана было 5 лепешек, а у Петра  – 7. К ним подошел охотник, ' +
                    'и они предложили ему присоединиться к ним. Лепешки разделили поровну. После обеда охотник дал лесорубам 11 ' +
                    'копеек и предложил разделить их так, чтобы каждому досталось по справедливости.<br><br> ' +
                    'Сколько копеек должен взять себе Иван?',
                answer: '1 копейку.'
            }
        ]
    },
    {
        id: 'cat_3',
        name: 'Исторические факты',
        tasks: [
            {
                id: '3_1',
                text: 'Двенадцатый месяц называется «декабрь». Это слово происходит от греческого «дека» – десять. ' +
                    'Отсюда также слово «декалитр» – 10л, «декада» – 10 дней и т. п. ' +
                    'Выходит, что месяц декабрь носит название «десятый»?<br><br> ' +
                    'Чем объяснить это несоответствие?',
                answer: 'Издревле Новый год на Руси отмечали 1 марта и декабрь был десятым месяцем года'
            },
            {
                id: '3_2',
                text: 'Науку об измерении расстояний, площадей, объемов, свойств различных ' +
                    'геометрических фигур греки назвали геометрией.<br><br> ' +
                    'Что означает в переводе с греческого слово «геометрия»?',
                answer: 'Землемерие'
            },
            {
                id: '3_3',
                text: 'Самый древний математический труд был найден не на территории Древнего Рима или Александрии, а в Свазиленде и ' +
                    'представлял из себя предмет с выбитыми на нем черточками, возраст которого был практически 40000 лет.<br><br> ' +
                    'Что это за предмет?',
                answer: 'Кость бабуина'
            },
            {
                id: '3_4',
                text: 'Сформулируйте теорему из школьного курса геометрии, которая вошла в книгу рекордов Гиннесса как ' +
                    'теорема с максимальным числом известных доказательств.',
                answer: 'Теорема Пифагора'
            },
            {
                id: '3_5',
                text: 'Этот неофициальный праздник отмечают дважды; в разных странах в разные дни, но обе даты символизируют одно число.<br><br> ' +
                    'Назовите праздник и соответствующие даты.',
                answer: 'День числа Пи. 14 марта и 22 июля'
            },
            {
                id: '3_6',
                text: 'Только один из математиков имеет титул чемпиона олимпийских игр.<br><br> Назовите его имя.',
                answer: 'Пифагор был и олимпийским чемпионом в кулачных боях'
            },
            {
                id: '3_7',
                text: 'При каком русском правителе впервые русские меры (верста, сажень, аршин, пуд, золотник) были определены в  систему?',
                answer: 'При Петре I'
            }
        ]
    },
    {
        id: 'cat_4',
        name: 'Ученые - математики',
        tasks: [
            {
                id: '4_1',
                text: 'Какой  великий русский ученый объяснил природу северного сияния? Ему были подвластны многие науки: ' +
                    'математика, физика, химия, география, история, металлургия, астрономия, геология и др.',
                answer: 'Михаил Васильевич Ломоносов'
            },
            {
                id: '4_2',
                text: 'Назовите женщину — математика, в детстве учившую математику по обоям.',
                answer: 'Софья Васильевна Ковалевская'
            },
            {
                id: '4_3',
                text: 'О каком древнем ученом мы знаем очень мало, но его трудами пользуемся по сегодняшний день?',
                answer: 'Евклид'
            },
            {
                id: '4_4',
                text: 'В детстве его учителя называли вундеркиндом, о себе он говорил, что считать он научился раньше, ' +
                    'чем разговаривать. О его обучении в начальной школе известен следующий факт: учитель, чтобы занять класс на ' +
                    'продолжительное время самостоятельной работой, дал детям задание - вычислить сумму всех натуральных чисел от ' +
                    '1 до 100. Но он это задание выполнил почти моментально.<br><br> ' +
                    'О каком учёном идёт речь?',
                answer: 'Карл Гаусс'
            },
            {
                id: '4_5',
                text: 'Его называют «отцом алгебры», так как он является основоположником символической алгебры. ' +
                    'Помимо этого, он раскрыл шифр переписки испанского короля Филиппа II в период войны Франции с ' +
                    'Испанией, чем приблизил победу Франции Испанская инквизиция, по рекомендации короля, объявила, ' +
                    'что он использовал чёрную магию и присудила его к сожжению на костре.',
                answer: 'Франсуа Виет'
            },
            {
                id: '4_6',
                text: 'Один из самых известных математиков современности, сумел разрешить сложнейшую загадку человечества: ' +
                    'теорему Анри Пуанкаре. Отказавшись от положенного за доказательство миллиона долларов, он вызвал ' +
                    'гнев общества.',
                answer: 'Григорий Яковлевич Перельман'
            },
            {
                id: '4_7',
                text: 'Он считал аксиому параллельности Евклида произвольным ограничением, сняв которое, открыл неевклидову геометрию.',
                answer: 'Николай Иванович Лобачевский'
            }
        ]
    },
    {
        id: 'cat_5',
        name: 'Чёрный ящик',
        tasks: [
            {
                id: '5_1',
                text: 'Фанаты ролевых игр называют их дайсами. Жители Средней Азии и Кавказа – зариками. ' +
                    'А математики – генераторами случайных чисел. Его название пришло к нам из греческого языка.<br><br> ' +
                    'Какой предмет лежит в чёрном ящике?',
                answer: 'Кубик'
            },
            {
                id: '5_2',
                text: 'Этот предмет был изобретен в Древней Греции. Умение пользоваться им считалось верхом совершенства, ' +
                    'умение решать задачи с его помощью – признаком большого ума. Этот предмет незаменим в архитектуре и строительстве.<br><br> ' +
                    'Какой предмет лежит в чёрном ящике?',
                answer: 'Циркуль'
            },
            {
                id: '5_3',
                text: 'В чёрном ящике лежит предмет, который  был изобретен Архимедом. По этому поводу римский архитектор 1 в. до н.э. ' +
                    'Витрувий писал: «…образуются карманы, которые заполняются водой. Поскольку эти карманы при вращении «улитки» как ' +
                    'бы бегут вверх, то захваченная ими вода поднимается, пока не выплеснется».<br><br> ' +
                    'Какой предмет был изобретён Архимедом и лежит в чёрном ящике?',
                answer: 'Винт Архимеда'
            },
            {
                id: '5_4',
                text: 'Этот предмет представляет собой набор таблиц. Если перемножить все числа в любом вертикальном столбике любой ' +
                    'таблицы, то полученное число обязательно будет делиться на 12. Какой предмет обладает таким удивительным ' +
                    'свойством?Этот предмет представляет собой набор таблиц. Если перемножить все числа в любом ' +
                    'вертикальном столбике любой таблицы, то полученное число обязательно будет делиться на 12.<br><br> ' +
                    'Какой предмет обладает таким удивительным свойством?',
                answer: 'Календарь'
            },
            {
                id: '5_5',
                text: 'Этот предмет был создан 1500 лет до нашей эры. Традиционно, в Японии этот предмет напоминает фонарик. ' +
                    'В Китае аналогом этого предмета была промасленная веревка с завязанными узлами.<br><br> ' +
                    'Какой предмет лежит в чёрном ящике?',
                answer: 'Часы'
            },
            {
                id: '5_6',
                text: 'Евклид в свое время предложил этим названием наделять некие телесные фигуры, которые имеют ограничения ' +
                    'плоскостями, исходящими от общей плоскости и сходящихся к единой точке.<br><br> ' +
                    'Какое геометрическое тело лежит в чёрном ящике?',
                answer: 'Пирамида'
            },
            {
                id: '5_7',
                text: 'В 1992 году группа австралийских единомышленников объединилась, чтобы заработать деньги. ' +
                    'Для осуществления проекта каждый затратил по 2500 долларов. В итоге,  каждому досталось по 9000 долларов.<br><br> ' +
                    'С помощью какого предмета удалось реализовать задуманное?',
                answer: 'Лотерейный билет'
            }
        ]
    },
    {
        id: 'cat_6',
        name: 'Числа',
        tasks: [
            {
                id: '6_1',
                text: 'Что, в переводе с арабского, означает слово «цифра»?',
                answer: 'Нуль или ноль'
            },
            {
                id: '6_2',
                text: 'Все числа обозначаются знаками: цифрами или буквами. М-1000, D– 500, C – 100, L – 50, X – 10, V – 5, I -1.<br><br> ' +
                    'Какое число означает запись: MDCCLXXXIX?',
                answer: '1789'
            },
            {
                id: '6_3',
                text: 'Это число используют в мировой статистике, прогнозе погоды и других ситуациях, требующих большой вычислительной ' +
                    'мощности. Если его записать в виде десятичной дроби, оно  не повторяется и не оканчивается.<br><br> ' +
                    'Воплощением этого числа является пирамида Хеопса',
                answer: 'Число π'
            },
            {
                id: '6_4',
                text: 'Эти числа вплоть до XIX века почти не использовались, так как их считали бессмысленными и не применимыми. ' +
                    'Однако они пользовались спросом у людей, ведущих свои дела, для обозначения финансовых убытков.<br><br> ' +
                    'Какие это числа?',
                answer: 'Отрицательные числа'
            },
            {
                id: '6_5',
                text: 'В русском языке названия числительных до 100, делящихся на 10, образуются по одному и тому же правилу.  ' +
                    'Но среди этого ряда есть число, название которого общему  правилу не подчиняется.<br><br> ' +
                    'Какое это число?',
                answer: 'Число 40'
            },
            {
                id: '6_6',
                text: 'На эмблемах Олимпийских игр год обычно обозначается двумя (например, Барселона-92) или четырьмя цифрами ' +
                    '(например, Пекин-2008). Но один раз год был обозначен пятью цифрами. Это случилось в 1960 году, когда Олимпиада ' +
                    'проходила в Риме.<br> ' +
                    'Как была обозначена олимпиада на эмблеме, если М-1000, D– 500, C – 100, L – 50, X – 10, V – 5, I -1?',
                answer: '<img src="img/6_6.jpg"><br> - число 1960 было записано как MCMLX'
            },
            {
                id: '6_7',
                text: 'Эти числа были названы в честь итальянского математика Леонардо Пизанского, известного как Фибоначчи, ' +
                    'который познакомил Европу с десятичной системой счисления и арабскими цифрами. Числа Фибоначчи представляют ' +
                    'собой числа последовательности в следующем прядке: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, … При ' +
                    'этом каждое следующее число равно сумме двух предыдущих чисел. Последовательность Фибоначчи наблюдается природе ' +
                    'у растений и животных, в узоре семян подсолнуха, ананасе, сосновой шишке.<br><br> ' +
                    'Назовите последовательность 1,2,3,5 на теле человека.',
                answer: '• Один нос,<br>• два глаза,<br>• три сегмента конечностей,<br>• пять пальцев на руке.'
            }
        ]
    }/*,
    {
        id: 'cat_7',
        name: 'Болельщикам',
        tasks: [
            {
                id: '7_1',
                text: 'Почему стала использоваться десятичная система счисления?',
                comp: false,
                answer: 'На руках 10 пальцев'
            },
            {
                id: '7_2',
                text: 'Чему равна сумма всех чисел от 1 до 100?',
                comp: false,
                answer: '5050'
            },
            {
                id: '7_3',
                text: 'Петух, стоя на одной ноге весит 4 кг 250 г. Сколько будет весить петух, когда встанет на две ноги?',
                comp: false,
                answer: '4кг 250г'
            },
            {
                id: '7_4',
                text: 'Какой предмет школьного курса на всех языках произносится одинаково?',
                comp: false,
                answer: 'Алгебра'
            },
            {
                id: '7_5',
                text: 'Чкалов называл ее полетом, Суворов –гимнастикой, а Гильберт – всего лишь игрой, в которую ' +
                    'играют согласно простым правилам.<br><br>  Назовите ее.',
                comp: false,
                answer: 'Математика'
            },
            {
                id: '7_6',
                text: 'А.В.  Суворов сказал: «Служба и … – две параллельные линии: не сходятся. Назовите пропущенное слово.',
                comp: false,
                answer: 'Дружба'
            },
            {
                id: '7_7',
                text: 'Солдаты шли строем по два. Один из них насчитал впереди себя  9 пар, сзади 5 пар.<br><br> Сколько солдат было в строю?',
                comp: false,
                answer: '30'
            }
        ]
    }*/
];

function setTowns() {
    var $page = $('#page_1');

    $page.empty();
    towns.forEach(function (item) {
        $page.append('<span id="' + item.id + '" class="town-container"><span class="symbol">' + item.symb + ' </span><span>' + item.text + '</span></div>');
    });

    animateTowns();
}

function animateTowns() {
    var times = [
        5000,
        3000,
        4000,
        6000,
        7000,
        8000,
        9000,
        10000
    ];
    $('.town-container').each(function (i, item) {
        times.shuffle();
        setTimeout(function () {
            times.shuffle();
            setInterval(function () {
                $(item).toggleClass('two');
            }, times[0]);
        }, times[0]);
    });

}

function setTiles() {
    $('.quarter-panel').each(function (i, item) {
        if (!$(item).hasClass('quest')) {
            fillThis($(item));
        }
    });
}

function fillThis(obj) {
    for (var i = 0; i < 4; i ++) {
        obj.append('<div class="tile-group"></div>');
        for (var j = 0; j <= 4; j ++) {

        }
    }
    obj.find('.tile-group').each(function (i, item) {
        for (var j = 0; j < 4; j ++) {
            $(item).append('<div class="tile not-hiden"></div>');
        }
    })
}

function setQuestions() {
    var $que = $('.questions');
    var arr =[];
    $que.empty();
    $que.append('<div id="main_cat" class="category active"><div class="category-content"><div class="questions-half"></div><div class="questions-half"></div></div></div>');
    arr.push('#main_cat');
    category.forEach(function (item) {
        $que.append('<div id="' + item.id + '" class="category"><div class="category-content"><div class="task-header my-text"><button class="back-button"><<</button><span>' + item.name + '</span></div><div class="questions-half for-task"></div><div class="questions-half for-task"></div></div></div>');
        arr.push('#' + item.id);
    });
    $('.back-button').on('click', function () {
        goToCategory(arr[0]);
    });
    var half = Math.round(arr.length / 2);
    arr.forEach(function (item, i) {
        if(i === 0) {
            $(item).find('.questions-half').each(function (i2, item2) {
                for(var ii = half * i2; ii < half + half *i2 * 2; ii++) {
                    if(category[ii]) {
                        $(item2).append('<div id="c-' + category[ii].id + '" class="question-panel my-text">' + category[ii].name + '</div>');
                        $('.question-panel').last().on('click', function () {
                            var id = $(this).attr('id').split('-').splice(1).join('');
                            goToCategory('#' + id);
                        });
                    }
                }
            });
        } else {
            var j = 0;
            j = findCategory(item);
            var otherhalf;
            $(item).find('.questions-half').each(function (i2, item2) {
                otherhalf = Math.round(category[j].tasks.length / 2);
                for(var ii = otherhalf * i2; ii < otherhalf + otherhalf *i2 * 2; ii++) {
                    if(category[j].tasks[ii]) {
                        $(item2).append('<div id="c-' + category[j].tasks[ii].id + '" class="task-panel">' + (ii + 1) + '</div>');
                        $('.task-panel').last().on('click', function () {
                            var id = $(this).attr('id').split('-').splice(1).join('');
                            showTask(id);
                            $(this).addClass('my-hide').off('click');
                        });
                    }
                }
            });
        }
    });
}

function findCategory(id) {
    var result = 0;
    var tmp = id.split('#').join('');
    category.forEach(function (item, i) {
        if(item.id === tmp) result = i;
    });
    return result;
}

var TEAMS = [
    {
        name: 'Команда 1',
        id: 'team1'
    },
    {
        name: 'Команда 2',
        id: 'team2'
    },
    {
        name: 'Команда 1',
        id: 'team1'
    },
    {
        name: 'Команда 2',
        id: 'team2'
    }

];

var viewer = new Vue({
    el: '#task-viewer',
    data: {
        text: '',
        answer: '',
        visible: false,
        teamOne: TEAMS[0].name,
        teamTwo: TEAMS[1].name,
        teamThree: TEAMS[2].name,
        teamOneId: TEAMS[0].id,
        teamTwoId: TEAMS[1].id,
        teamThreeId: TEAMS[2].id,
        teamButtonsVisible: false,
        answerButtonVisible: false,
        answerControlsVisible: false,
        closeButtonVisible: false,
        targetBlockId: '',
        timer: '01:00',
        defaultTime: 59,
        timerStartVisible: true,
        timerStopVisible: false,
        blitzButtonVisible: false,
        blitzActive: false,
        backgroundClass: '',
        teamFailed: false,
        correctAnswer: true,
        blitz: {
            idx: 0,
            arr: []
        },
        blitzStat: []
    },
    watch: {
        teamButtonsVisible: function (val, oldVal) {
            if(val !== oldVal) {
                if(!val) this.answerControlsVisible = true;
            }
        },
        timerStartVisible: function (val, oldVal) {
            if(val !== oldVal) {
                this.timerStopVisible = !val;
            }
        },
        timer: function (val, oldVal) {
            if(val === '00:00') {
                clearInterval(interval);
                if(!this.blitzActive) {
                    this.timerStopVisible = false;
                    this.showTeamButtons(true);
                } else {
                    this.timerStopVisible = false;
                    this.answerButtonVisible = true;
                }

            }
        },
        'blitz.idx': function (val, oldval) {
            if(val !== oldVal) {

            }
        },
        visible: function (val, oldVal) {
            if(val !== oldVal) {
                if(!val) this.closeButtonVisible = val;
                else this.correctAnswer = false;
            }
        },
        answerButtonVisible: function (val, oldVal) {
            if(val !== oldVal) {
                if(!val) this.closeButtonVisible = true;
            }
        }
    },
    computed: {
        isVisible: function () {
            return this.visible;
        },
        isTeamButtonsVisible: function () {
            return this.teamButtonsVisible;
        },
        isAnswerButtonVisible: function () {
            return this.answerButtonVisible;
        },
        isAnswerControlsVisible: function () {
            return this.answerControlsVisible;
        },
        isStartVisible: function () {
            return this.timerStartVisible;
        },
        isStopVisible: function () {
            return this.timerStopVisible;
        },
        isBlitzButtonVisible: function () {
            return this.blitzButtonVisible;
        },
        isCloseButtonVisible: function () {
            return this.closeButtonVisible;
        }
    },
    methods: {
        show: function () {
            this.visible = true;
        },
        hide: function () {
            this.visible = false;
        },
        showTeamButtons: function (flag) {
            this.teamButtonsVisible = flag;
        },
        showAnswerButton: function (flag) {
            this.answerButtonVisible = flag;
        },
        showAnswerControls: function (flag) {
            this.answerControlsVisible = flag;
        },
        printText: function (txt) {
            this.text = txt.text;
            this.answer = txt.answer;
            this.backgroundClass = txt.id;
        },
        teamClickHandle: function(team) {
            switch (team) {
                case 'one': this.targetBlockId = this.teamOneId;
                    break;
                case 'two': this.targetBlockId = this.teamTwoId;
                    break;
                case 'three': this.targetBlockId = this.teamThreeId;
                    break;
            }
            this.showTeamButtons(false);
        },
        answerClickHandle: function () {
            this.showAnswerButton(false);
            this.text = '<p style="text-align: center">' + this.answer + '</p>';
        },
        correctAnswerClickHandle: function () {
            if(!this.blitzActive) {
                this.correctAnswer = true;
                this.showAnswerButton(true);
            } else {
                this.blitzStat.push(true);
                this.blitzButtonVisible = true;
            }
            this.showAnswerControls(false);

        },
        incorrectAnswerClickHandle: function () {
            if(this.blitzActive) {
                this.blitzStat.push(false);
                this.answerControlsVisible = false;
                this.blitzButtonVisible = true;

            } else {
                if(this.teamFailed) {
                    this.answerControlsVisible = false;
                    this.answerButtonVisible = true;

                } else {
                    this.teamFailed = true;
                    this.answerControlsVisible = false;
                    this.timerStartVisible = true;
                }
            }
        },
        setTimer: function (val) {
            this.timer = val;
        },
        timerStartHandle: function () {
            if(!this.blitzActive) {
                var time = !this.teamFailed ? this.defaultTime : duraTime;
                startTimer(time);
                this.timerStartVisible = false;
            } else {
                startTimer(9);
                this.timerStartVisible = false;
                this.timerStopVisible = true;
            }
        },
        timerStopHandle: function () {
            if(this.blitzActive) {
                clearInterval(interval);
                this.timerStopVisible = false;
                if(this.blitz.idx === 0 ) this.showTeamButtons(true);
                else {
                    this.showAnswerControls(false);
                }
            } else {
                clearInterval(interval);
                this.timerStopVisible = false;
                if(this.teamFailed) {
                    this.showAnswerControls(true);
                    this.targetBlockId = this.targetBlockId === this.teamOneId ? this.teamTwoId : this.teamOneId;
                } else {
                    this.showTeamButtons(true);
                }
            }
        },
        resetTimer: function () {
            clearInterval(interval);
            this.timerStartVisible = true;
            this.timer = '01:00';
        },
        blitzClickHandle: function () {
            this.blitzButtonVisible = false;
            this.blitz.idx++;
            if(this.blitz.arr[this.blitz.idx]) {
                this.timer = '00:10';
                this.timerStopVisible = false;
                this.timerStartVisible = true;
                this.printText(this.blitz.arr[this.blitz.idx])
            } else {
                this.showTeamButtons(true);
            }
        },
        startBlitz: function (val) {
            this.blitzActive = true;
            this.timer = '00:10';
            this.blitz.idx = 0;
            this.blitz.arr = val.arr;
            this.blitzStat = [];
            this.printText(this.blitz.arr[this.blitz.idx]);
        },
        closeClickHandle: function () {
            if(this.correctAnswer) {
                hideTile(this.targetBlockId);
                score.scoreInc(this.targetBlockId);
            }
            this.correctAnswer = false;
            this.teamFailed = false;
            this.hide();
            goToCategory('#main_cat');
        }
    }
});

var score = new Vue({
    el: '#score',
    data: {
        teamOne: TEAMS[0].name.toUpperCase(),
        teamTwo: TEAMS[1].name.toUpperCase(),
        teamThree: TEAMS[2].name.toUpperCase(),
        teamOneScore: 0,
        teamTwoScore: 0,
        teamThreeScore: 0
    },
    methods: {
        scoreInc: function (team) {
            switch (team) {
                case TEAMS[0].id: this.teamOneScore++;
                    break;
                case TEAMS[1].id: this.teamTwoScore++;
                    break;
                case TEAMS[2].id: this.teamThreeScore++;
                    break;
            }
        },
        resetScore: function () {
            this.teamOneScore = 0;
            this.teamTwoScore = 0;
            this.teamThreeScore = 0;
        }
    }
});

function showTask(id) {

    var task = getTask(id);

    if(!task.blitz) {
        viewer.show();
        viewer.resetTimer();
        viewer.printText(task);

    } else {
        viewer.show();
        viewer.resetTimer();
        viewer.startBlitz(task);
    }
    viewer.showTeamButtons(false);
    viewer.showAnswerButton(false);
    viewer.showAnswerControls(false);

    window.onclick = function(event) {
        if (event.target.className === 'modal') {
          // viewer.hide();
        }
    }
}

function getTask(id) {
    var obj = {
        text: '',
        answer: '',
        visible: false,
        blitz: false,
        arr: [],
        id: ''
    };
    category.forEach(function (item) {
        item.tasks.forEach(function (task) {
            if(task.id === id) {
                obj.text = task.text;
                obj.answer = task.answer;
                obj.id = $('#c-' + id).parent().parent().parent().attr('id');
                if(task.blitz) {
                    obj.blitz = true;
                    obj.arr = task.blitz;
                }
            }
        });
    });
    return obj;
}

function hideTile(id) {
    var $block =  $('#' + id);
    var len = $block.find('.not-hiden').length;
    var ran = Math.floor(Math.random() * len);
    $block.find('.not-hiden').each(function (i, item) {
        if(i === ran) $(item).removeClass('not-hiden').addClass('hiden');
    });
}

var interval;
var duraTime;

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    interval  = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        viewer.setTimer(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            clearInterval(interval);
        }
        duraTime = timer;
        playAudio('audioTimer');
    }, 1000);
}

//helpers

function goToPage(page, speed) {
    if (! page)
        return false;
    if (! speed)
        speed = 300;

    var $newPage = $(page);
    var $curPage = $('.page.active');
    if ($newPage.attr('id') === $curPage.attr('id')) {
        onPageNavigate(page);
        return false;
    }
    $curPage.fadeOut(speed, function () {
        $curPage.removeClass('active');

        onPageNavigate(page);

        $newPage.fadeIn(speed, function () {
            $newPage.addClass('active');
        });
        setTimeout(function () {
        }, 50);
    });
}

function goToCategory(page, speed) {
    if (! page)
        return false;
    if (! speed)
        speed = 300;

    var $newPage = $(page);
    var $curPage = $('.category.active');
    if($curPage.find('.my-hide').length === $curPage.find('.task-panel').length) {
        var $obj = $('#c-' + $curPage.attr('id'));
        if(!$obj.hasClass('my-hide')) $obj.addClass('my-hide');
    }
    if ($newPage.attr('id') === $curPage.attr('id')) {
        //onPageNavigate(page);
        return false;
    }
    $curPage.fadeOut(speed, function () {
        $curPage.removeClass('active');
       // onPageNavigate(page);

        $newPage.fadeIn(speed, function () {
            $newPage.addClass('active');
        });
        setTimeout(function () {
        }, 50);
    });
}

function onPageNavigate(page) {
    switch (page) {
        case '#page_1': {
        }
            break;
        case '#page_2': {
            setTiles();
            setQuestions();
            score.resetScore();
        }
            break;
        case '#page_3': {
        }
            break;
    }
}

function playAudio(audio, options) {
    options = options || {};
    var a = document.getElementById(audio);
    //a.playbackRate = options.speed || 1;

    // if(a.currentTime)
    //     a.currentTime = 0;
    $(a).off();

    var onEnded = function (e) {

    };

    a.play();
    a.addEventListener('ended', onEnded);
}
