<?php
namespace H4ck3r31\janpovure\Random {
    function randomWords(int $amount, int $length): string
    {
        $words = [];
        for ($i = 0; $i < $amount; $i++) {
            $words[] = ucfirst(randomString($length));
        }
        return implode(' ', $words);
    }

    function randomString(int $length): string
    {
        $data = range('a', 'z');
        shuffle($data);
        return implode('', array_slice($data, 0, $length));
    }

    function randomFloat(float $min, float $max, int $precision = 2)
    {
        return round(
            rand($min, $max) + 1 / rand(1, 10**$precision),
            $precision
        );
    }

    function randomObjects(int $min, int $max, callable $factory)
    {
        $objects = [];
        $amount = rand($min, $max);
        for ($i = 0; $i < $amount; $i++) {
            $objects[] = call_user_func($factory);
        }
        return $objects;
    }

    function randomColorCode(): string
    {
        return implode(
            '',
            array_map(
                function (int $value) {
                    return sprintf('%02x', $value);
                },
                [rand(0, 255), rand(0, 255), rand(0, 255)]
            )
        );
    }

    trait RandomCallable
    {
        public static function randomCallable(): callable
        {
            return static::class . '::random';
        }
    }

    trait PropertySerializableTrait
    {
        public function jsonSerialize(): array
        {
            return get_object_vars($this);
        }
    }

    class Product implements \JsonSerializable
    {
        use RandomCallable, PropertySerializableTrait;

        private $title;
        private $description;
        private $price;
        private $colors;

        static public function random(): Product
        {
            return new static(
                randomWords(2, 5),
                randomWords(20, 5),
                randomFloat(10, 50),
                ...randomObjects(3, 6, Color::randomCallable())
            );
        }

        public function __construct(
            string $title,
            string $description,
            float $price,
            Color ...$colors
        )
        {
            $this->title = $title;
            $this->description = $description;
            $this->price = $price;
            $this->colors = $colors;
        }
    }

    class Color implements \JsonSerializable
    {
        use RandomCallable, PropertySerializableTrait;

        private $title;
        private $colorCode;

        public static function random(): Color
        {
            return new static(
                randomWords(2, 5),
                randomColorCode()
            );
        }

        public function __construct(
            string $title,
            string $colorCode
        )
        {
            $this->title = $title;
            $this->colorCode = $colorCode;
        }
    }
}

namespace {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Accept, Content-Type');
    header('Access-Control-Allow-Methods: GET');
    header('Content-Type: application/json');

    echo json_encode(
        \H4ck3r31\janpovure\Random\randomObjects(
            3,
            9,
            \H4ck3r31\janpovure\Random\Product::randomCallable()
        )
    );
}
