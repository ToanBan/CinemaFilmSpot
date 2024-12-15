<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class ActorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $actors = [
            ['name_actor' => 'Actor 1'],
            ['name_actor' => 'Actor 2'],
            ['name_actor' => 'Actor 3'],
            ['name_actor' => 'Actor 4'],
            ['name_actor' => 'Actor 5'],
        ];

        DB::table('actors')->insert($actors);
    }
}
