<?php

namespace App\Http\Controllers\Admin;

use App\Content;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ContentController extends Controller
{
    public function index() 
    {
        return Content::first();
    }

    public function update(Request $request) 
    {
        Content::truncate();

        Content::create(
			[
                'phone_main' => $request->phone_main, 
                'header_main' => [
                    "ru" => $request->header_main_ru,
                    "en" => $request->header_main_en
                ], 
                'images' => [
                    "budva_riviera"     => "budva-riviera.jpg",
                    "boka_kotorska_bay" => "boka-kotorska-bay.jpg",
                    "bar_riviera"       => "bar-riviera.jpg",
                ],
                'faq' => [
                    "title" => [
                        "ru" => $request->faq_title_ru,
                        "en" => $request->faq_title_en,
                    ],
                    "areas" => [
                        "ru" => [
                            "title" => $request->faq_areas_ru_title,
                            "budva_riviera" => [
                                "title" => $request->faq_areas_ru_budva_riviera_title,
                                "text"  => $request->faq_areas_ru_budva_riviera_text,
                            ],    
                            "boka_kotorska_bay" => [
                                "title" => $request->faq_areas_ru_boka_kotorska_bay_title,
                                "text"  => $request->faq_areas_ru_boka_kotorska_bay_text,
                            ],
                            "bar_riviera" => [
                                "title" => $request->faq_areas_ru_bar_riviera_title,
                                "text"  => $request->faq_areas_ru_bar_riviera_text
                            ],               
                        ], 
                        "en" => [
                            "title" => $request->faq_areas_en_title,
                            "budva_riviera" => [
                                "title" => $request->faq_areas_en_budva_riviera_title,
                                "text"  => $request->faq_areas_en_budva_riviera_text,
                            ],    
                            "boka_kotorska_bay" => [
                                "title" => $request->faq_areas_en_boka_kotorska_bay_title,
                                "text"  => $request->faq_areas_en_boka_kotorska_bay_text,
                            ],
                            "bar_riviera" => [
                                "title" => $request->faq_areas_en_bar_riviera_title,
                                "text"  => $request->faq_areas_en_bar_riviera_text,
                            ],                
                        ],
                    ],
                    "quest_answ" => [
                        "ru" => $request->quest_answ_ru,                       
                        "en" => $request->quest_answ_en
                    ],
                ],
                'contact_page' => [
                    "ru" => $request->contact_page_ru,
                    "en" => $request->contact_page_en,
                ]
			]
		);
    }
}
