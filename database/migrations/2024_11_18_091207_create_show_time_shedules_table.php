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
        Schema::create('show_time_shedules', function (Blueprint $table) {
            $table->id();
            $table->string('id_movie');
            $table->unsignedBigInteger('id_room');
            $table->dateTime('showtime');
            $table->dateTime('booking_time');
            $table->foreign('id_room')->references('id')->on('rooms')->onDelete('cascade');
            $table->foreign('id_movie')->references('id_movie')->on('movies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('show_time_shedules');
    }
};
