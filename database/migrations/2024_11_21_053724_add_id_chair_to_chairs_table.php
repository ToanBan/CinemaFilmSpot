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
        Schema::table('chairs', function (Blueprint $table) {
            $table->unsignedBigInteger('id_chair');
            $table->foreign('id_chair')->references('id')->on('type_chairs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chairs', function (Blueprint $table) {
            $table->dropForeign(['id_chair']);
            $table->dropColumn('id_chair');
        });
    }
};
