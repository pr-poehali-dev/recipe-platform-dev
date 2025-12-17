import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  type: string;
  time: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Паста Карбонара',
    cuisine: 'Итальянская',
    type: 'Основные блюда',
    time: 25,
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    ingredients: ['Спагетти 400г', 'Бекон 200г', 'Яйца 4шт', 'Пармезан 100г', 'Чеснок 2 зубчика', 'Соль, перец'],
    instructions: [
      'Отварите спагетти в подсоленной воде до состояния аль денте',
      'Обжарьте нарезанный бекон с чесноком до золотистой корочки',
      'Взбейте яйца с тертым пармезаном',
      'Смешайте горячую пасту с беконом и яичной смесью',
      'Быстро перемешайте, чтобы яйца не свернулись',
      'Подавайте сразу с пармезаном'
    ],
    servings: 4
  },
  {
    id: 2,
    name: 'Том Ям',
    cuisine: 'Азиатская',
    type: 'Основные блюда',
    time: 35,
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    ingredients: ['Креветки 300г', 'Кокосовое молоко 400мл', 'Грибы 200г', 'Лемонграсс', 'Имбирь', 'Чили', 'Рыбный соус', 'Лайм'],
    instructions: [
      'Вскипятите воду с лемонграссом и имбирем',
      'Добавьте грибы и варите 5 минут',
      'Влейте кокосовое молоко',
      'Добавьте креветки и варите до готовности',
      'Приправьте рыбным соусом и чили',
      'Украсьте кинзой и подавайте с лаймом'
    ],
    servings: 3
  },
  {
    id: 3,
    name: 'Тако с говядиной',
    cuisine: 'Мексиканская',
    type: 'Основные блюда',
    time: 30,
    difficulty: 'Легкая',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    ingredients: ['Говяжий фарш 500г', 'Тортильи 8шт', 'Помидоры 3шт', 'Салат', 'Сыр чеддер 150г', 'Авокадо 2шт', 'Специи тако'],
    instructions: [
      'Обжарьте фарш со специями тако',
      'Разогрейте тортильи на сковороде',
      'Нарежьте овощи и авокадо',
      'Натрите сыр',
      'Выложите фарш на тортильи',
      'Добавьте овощи, сыр и авокадо'
    ],
    servings: 4
  },
  {
    id: 4,
    name: 'Греческий салат',
    cuisine: 'Средиземноморская',
    type: 'Закуски',
    time: 15,
    difficulty: 'Легкая',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    ingredients: ['Помидоры 4шт', 'Огурцы 2шт', 'Фета 200г', 'Оливки 100г', 'Красный лук 1шт', 'Оливковое масло', 'Орегано'],
    instructions: [
      'Нарежьте помидоры и огурцы крупными кусками',
      'Нарежьте лук полукольцами',
      'Добавьте оливки и кубики феты',
      'Полейте оливковым маслом',
      'Посыпьте орегано',
      'Аккуратно перемешайте'
    ],
    servings: 4
  },
  {
    id: 5,
    name: 'Тирамису',
    cuisine: 'Итальянская',
    type: 'Десерты',
    time: 40,
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    ingredients: ['Маскарпоне 500г', 'Печенье савоярди 300г', 'Яйца 4шт', 'Сахар 100г', 'Эспрессо 300мл', 'Какао порошок', 'Марсала 50мл'],
    instructions: [
      'Взбейте желтки с сахаром до бела',
      'Добавьте маскарпоне и взбейте',
      'Взбейте белки в крепкую пену',
      'Аккуратно введите белки в крем',
      'Смочите печенье в эспрессо с марсалой',
      'Выкладывайте слоями: печенье-крем-печенье-крем',
      'Посыпьте какао и охладите 4 часа'
    ],
    servings: 6
  },
  {
    id: 6,
    name: 'Панкейки с ягодами',
    cuisine: 'Американская',
    type: 'Завтраки',
    time: 20,
    difficulty: 'Легкая',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800',
    ingredients: ['Мука 200г', 'Молоко 250мл', 'Яйца 2шт', 'Сахар 2ст.л', 'Разрыхлитель 1ч.л', 'Масло сливочное', 'Ягоды свежие'],
    instructions: [
      'Смешайте муку, сахар и разрыхлитель',
      'Взбейте яйца с молоком',
      'Соедините сухие и жидкие ингредиенты',
      'Разогрейте сковороду с маслом',
      'Жарьте панкейки с двух сторон до золотистого цвета',
      'Подавайте с ягодами и кленовым сиропом'
    ],
    servings: 3
  },
  {
    id: 7,
    name: 'Ризотто с грибами',
    cuisine: 'Итальянская',
    type: 'Основные блюда',
    time: 45,
    difficulty: 'Сложная',
    image: 'https://images.unsplash.com/photo-1476124369491-c4ca3e7e3e3e?w=800',
    ingredients: ['Рис арборио 300г', 'Белые грибы 400г', 'Лук 1шт', 'Белое вино 150мл', 'Бульон 1л', 'Пармезан 80г', 'Масло сливочное'],
    instructions: [
      'Обжарьте нарезанные грибы до золотистого цвета',
      'В другой сковороде обжарьте лук',
      'Добавьте рис и обжаривайте 2 минуты',
      'Влейте вино и дайте выпариться',
      'Добавляйте горячий бульон половниками, постоянно помешивая',
      'За 5 минут до готовности добавьте грибы',
      'В конце добавьте масло и пармезан'
    ],
    servings: 4
  },
  {
    id: 8,
    name: 'Гуакамоле',
    cuisine: 'Мексиканская',
    type: 'Закуски',
    time: 10,
    difficulty: 'Легкая',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800',
    ingredients: ['Авокадо 3шт', 'Помидоры 2шт', 'Лайм 1шт', 'Красный лук 0.5шт', 'Кинза', 'Чеснок 1 зубчик', 'Соль, перец'],
    instructions: [
      'Разомните мякоть авокадо вилкой',
      'Мелко нарежьте помидоры и лук',
      'Измельчите кинзу и чеснок',
      'Смешайте все ингредиенты',
      'Добавьте сок лайма',
      'Приправьте солью и перцем',
      'Подавайте с начос'
    ],
    servings: 4
  }
];

const cuisines = ['Все', 'Итальянская', 'Азиатская', 'Мексиканская', 'Средиземноморская', 'Американская'];
const types = ['Все', 'Завтраки', 'Основные блюда', 'Десерты', 'Закуски'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('Все');
  const [selectedType, setSelectedType] = useState('Все');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCuisine = selectedCuisine === 'Все' || recipe.cuisine === selectedCuisine;
    const matchesType = selectedType === 'Все' || recipe.type === selectedType;
    
    return matchesSearch && matchesCuisine && matchesType;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкая': return 'bg-secondary text-white';
      case 'Средняя': return 'bg-accent text-foreground';
      case 'Сложная': return 'bg-primary text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="ChefHat" size={40} className="text-primary" />
            <h1 className="text-4xl font-bold text-primary">Вкуснотека</h1>
          </div>
          
          <div className="relative mb-6">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по названию или ингредиентам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-2 focus:border-primary"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Кухня мира</h3>
              <div className="flex flex-wrap gap-2">
                {cuisines.map(cuisine => (
                  <Badge
                    key={cuisine}
                    variant={selectedCuisine === cuisine ? 'default' : 'outline'}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 ${
                      selectedCuisine === cuisine ? 'bg-primary text-white' : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setSelectedCuisine(cuisine)}
                  >
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Тип блюда</h3>
              <div className="flex flex-wrap gap-2">
                {types.map(type => (
                  <Badge
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 ${
                      selectedType === type ? 'bg-secondary text-white' : 'hover:bg-secondary/10'
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Найдено рецептов: <span className="font-semibold text-foreground">{filteredRecipes.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <Card 
              key={recipe.id}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className={`absolute top-3 right-3 ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{recipe.name}</CardTitle>
                <CardDescription className="text-base">{recipe.cuisine}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{recipe.time} мин</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    <span>{recipe.servings} порц.</span>
                  </div>
                </div>
                <Badge variant="outline" className="mt-3">
                  {recipe.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <Icon name="UtensilsCrossed" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Рецепты не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>

      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedRecipe.name}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {selectedRecipe.cuisine}
                  </Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {selectedRecipe.type}
                  </Badge>
                  <Badge className={`text-base px-4 py-2 ${getDifficultyColor(selectedRecipe.difficulty)}`}>
                    {selectedRecipe.difficulty}
                  </Badge>
                </div>

                <div className="flex gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    <span className="text-lg">{selectedRecipe.time} минут</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    <span className="text-lg">{selectedRecipe.servings} порций</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="ShoppingBasket" size={24} className="text-primary" />
                    Ингредиенты
                  </h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-lg">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Flame" size={24} className="text-primary" />
                    Приготовление
                  </h3>
                  <ol className="space-y-4">
                    {selectedRecipe.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-lg pt-1">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;