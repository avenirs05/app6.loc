<?php

use Illuminate\Database\Seeder;

use App\Content;

class ContentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Content::create(
			[
                'phone_main' => '+382 68 089 888', 
                'header_main' => [
                    "ru" => "Аренда вилл и апартаментов в Черногории без посредников",
                    "en" => "en Аренда вилл и апартаментов в Черногории без посредников"
                ], 
                'images' => [
                    "budva_riviera"     => "budva-riviera.jpg",
                    "boka_kotorska_bay" => "boka-kotorska-bay.jpg",
                    "bar_riviera"       => "bar-riviera.jpg",
                ],
                'faq' => [
                    "title" => [
                        "ru" => "Отдых в Черногории в 2020 году. Часто задаваемые вопросы.",
                        "en" => "en Отдых в Черногории в 2020 году. Часто задаваемые вопросы."
                    ],
                    "areas" => [
                        "ru" => [
                            "title" => "КУРОРТЫ И ГОРОДА В ЧЕРНОГОРИИ: КУДА ЛУЧШЕ ПОЕХАТЬ?",
                            "budva_riviera" => [
                                "title" => "Будванская ривьера",
                                "text"  => "<p>Открытое море. Лучшие пляжи в Черногории, преимущественно песчано-галечные. Главные курортные места: <i>Будва, Бечичи, Рафаиловичи, Свети Стефан (Близикуче), Петровац, Булярица.</i></p>
                                <p><i>Будва</i> — центр туризма в Черногории. Самая развитая инфраструктура. Максимальное количество туристов, отелей, магазинов, дискотек и развлечений. Почти все автобусные экскурсии на русском языке стартуют из Будвы. Три оборудованных песчано-галечных пляжа: <i>Могрен, Словенска Плажа и Ричардова глава</i>.</p>"
                            ],    
                            "boka_kotorska_bay" => [
                                "title" => "Бока-Которский залив",
                                "text"  => "<p><i>Котор, Пераст, Рисан.</i> Много старинных зданий, каменных улочек, древних церквей, памятников и достопримечательностей. Идеальное место для культурного отдыха. Пляжей почти нет. Купаться можно, ныряя с каменных плит на набережных, либо  использовать небольшие понтоны с лесенками в воду. Открытого моря нет.</p>
                                <p><i>Герцег-Нови, Кумбор, Биела</i>. Спокойное, чистое и глубокое море. Пляжи - мелкая галька. Самый зеленый и живописный регион, который называют «ботаническим садом» Черногории. Тихий курорт для семейного и романтического отдыха.</p>"
                            ],
                            "bar_riviera" => [
                                "title" => "Барская ривьера",
                                "text"  => "<p><i>Бар</i> — это крупный деловой и промышленный центр с кварталами офисов и торговым портом. Русскоязычных туристов мало, цены ниже. Пляж в Баре галечный, купающихся немного. Туристы приезжают сюда в основном за покупками.</p>
                                <p><i>Добры Воды, Шушань, Сутоморе</i> — много туристов (в основном сербы), мало туристической инфраструктуры и пляжей.</p>
                                <p><i>Ульцинь</i> — мусульманско-албанский край Черногории. Пляж - <i>Велика Плажа</i> протяженностью 13 км. Самый ветреный регион. Идеальное место для  кайтсерфинга.</p>"
                            ],               
                        ], 
                        "en" => [
                            "title" => "en КУРОРТЫ И ГОРОДА В ЧЕРНОГОРИИ: КУДА ЛУЧШЕ ПОЕХАТЬ?",
                            "budva_riviera" => [
                                "title" => "Будванская ривьера",
                                "text"  => "<p>Открытое море. Лучшие пляжи в Черногории, преимущественно песчано-галечные. Главные курортные места: <i>Будва, Бечичи, Рафаиловичи, Свети Стефан (Близикуче), Петровац, Булярица.</i></p>
                                <p><i>Будва</i> — центр туризма в Черногории. Самая развитая инфраструктура. Максимальное количество туристов, отелей, магазинов, дискотек и развлечений. Почти все автобусные экскурсии на русском языке стартуют из Будвы. Три оборудованных песчано-галечных пляжа: <i>Могрен, Словенска Плажа и Ричардова глава</i>.</p>"
                            ],    
                            "boka_kotorska_bay" => [
                                "title" => "Бока-Которский залив",
                                "text"  => "<p><i>Котор, Пераст, Рисан.</i> Много старинных зданий, каменных улочек, древних церквей, памятников и достопримечательностей. Идеальное место для культурного отдыха. Пляжей почти нет. Купаться можно, ныряя с каменных плит на набережных, либо  использовать небольшие понтоны с лесенками в воду. Открытого моря нет.</p>
                                <p><i>Герцег-Нови, Кумбор, Биела</i>. Спокойное, чистое и глубокое море. Пляжи - мелкая галька. Самый зеленый и живописный регион, который называют «ботаническим садом» Черногории. Тихий курорт для семейного и романтического отдыха.</p>"
                            ],
                            "bar_riviera" => [
                                "title" => "Барская ривьера",
                                "text"  => "<p><i>Бар</i> — это крупный деловой и промышленный центр с кварталами офисов и торговым портом. Русскоязычных туристов мало, цены ниже. Пляж в Баре галечный, купающихся немного. Туристы приезжают сюда в основном за покупками.</p>
                                <p><i>Добры Воды, Шушань, Сутоморе</i> — много туристов (в основном сербы), мало туристической инфраструктуры и пляжей.</p>
                                <p><i>Ульцинь</i> — мусульманско-албанский край Черногории. Пляж - <i>Велика Плажа</i> протяженностью 13 км. Самый ветреный регион. Идеальное место для  кайтсерфинга.</p>"
                            ],                
                        ],
                    ],
                    "quest_answ" => [
                        "ru" => "
                            <div>
                                <h3 class='mt-4 mb-2'>КАКОЕ МОРЕ В ЧЕРНОГОРИИ?</h3>
                                <p>
                                    Адриатическое море с чистой (прозрачность воды до 60 м) и лазурной водой, но при этом не самое теплое. Вода очень соленая (содержание природной соли 40%) и богата минералами. Пляжный сезон в Черногории начинается в начале мая, а заканчивается в середине октября.
                                </p>
                            </div>
                            <div>
                                <h3 class='mt-4 mb-2'>КАКОЕ МОРЕ В ЧЕРНОГОРИИ?</h3>
                                <p>
                                    Адриатическое море с чистой (прозрачность воды до 60 м) и лазурной водой, но при этом не самое теплое. Вода очень соленая (содержание природной соли 40%) и богата минералами. Пляжный сезон в Черногории начинается в начале мая, а заканчивается в середине октября.
                                </p>
                            </div>",                       
                        "en" => "<h3 class='mt-4 mb-2'>en КАКОЕ МОРЕ В ЧЕРНОГОРИИ?</h3><p>Адриатическое море с чистой (прозрачность воды до 60 м) и лазурной водой, но при этом не самое теплое. Вода очень соленая (содержание природной соли 40%) и богата минералами. Пляжный сезон в Черногории начинается в начале мая, а заканчивается в середине октября.</p>"
                    ],
                ],
                'contact_page' => [
                    "ru" => "<p><b>Адрес:</b> Budva 85310</p>
                             <p><b>Тел.:</b> +382 68 089 888</p>
                             <p><b>Viber:</b> +382 68 089 888</p>
                             <p><b>WhatsApp:</b> +382 68 089 888</p>
                             <p><b>E-mail:</b> arenda@mybudva.ru</p>",
                    "en" => "<p><b>en Адрес:</b> Budva 85310</p>
                             <p><b>Тел.:</b> +382 68 089 888</p>
                             <p><b>Viber:</b> +382 68 089 888</p>
                             <p><b>WhatsApp:</b> +382 68 089 888</p>
                             <p><b>E-mail:</b> arenda@mybudva.ru</p>",
                ]
			]
		);
    }
}
