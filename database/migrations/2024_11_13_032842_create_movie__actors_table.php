<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movie__actors', function (Blueprint $table) {
            $table->string('id_movie');
            $table->string('start');
            $table->string('area');
            $table->string('duration');
            $table->foreign('id_movie')->references('id_movie')->on('movies')->onDelete('cascade');
            $table->foreignId('id_actor')->constrained('actors')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movie__actors');
    }
};
