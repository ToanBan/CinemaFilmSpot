<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class DirectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $directors = [
            ['name_director' => 'Director 1'],
            ['name_director' => 'Director 2'],
            ['name_director' => 'Director 3'],
            ['name_director' => 'Director 4'],
            ['name_director' => 'Director 5'],
        ];

        DB::table('directors')->insert($directors);
    }

}
