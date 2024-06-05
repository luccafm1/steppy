#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "data.h"

int checar_array(char** array, int tamanho, char* valor);
int posicionar_player(Player* player);

int main(int argc, char **argv)
{
    if (argc != 2)
    {
        perror("Quantidade de argumentos inserida inválida!\nUso: programa <estilo-de-jogo>");
        exit(-1);
    }

    /*
    ESTILOS DE JOGO:

    pxp = player x player
    pxc = player x computer
    cxc = computer x computer
    */

    char* estilo_de_jogo[] = {"pxp", "pxc", "cxc"};
    char* opcao = argv[1];

    if (checar_array(estilo_de_jogo, sizeof(estilo_de_jogo) / sizeof(estilo_de_jogo[0]), opcao))
    {
        Player* player_1;
        Player* player_2;

        player_1, player_2 = inicializar(opcao);

        if (!posicionar_player(player_1) || !posicionar_player(player_2))
        {
            perror("Erro ao posicionar player(s)");
            printf("player_1 retornou %i e player_2 retornou %i\n", player_1->player, player_2->player);
            exit(-1);
        }

        exibir(player_1, 1);
        exibir(player_2, 1);

        free(player_1);
        free(player_2);
    }
    else
    {
        perror("Estilo de jogo inexistente! Cheque a entrada novamente.\nEntradas possíveis: pxp, pxc, cxc\n");
        exit(1);
    }

    return 0;
}

int checar_array(char** array, int tamanho, char* valor)
{
    for (int i = 0; i < tamanho; i++)
        if (strcmp(array[i], valor) == 0)
            return 1;
    return 0;
}

int posicionar_player(Player* player)
{
    int e; // embarcacao
    char o; // orientacao
    int x; // linha
    int y; // coluna
    
    puts("!");
    printf("%d\n\n", player->player);
    switch (player->player)
    {
        case 1: // player

            printf("\nSELECIONE UMA EMBARCACAO\n----------------------------\n (1) PORTA-AVIÃO\n (2) CONTRA-TORPEDEIRO\n (3) DESTROYER\n----------------------------\n");
            printf("Embarcacao >> "); scanf("%i", &e);
            printf("\nEmbarcacao %i selecionada!\n", e);

            printf("\nSELECIONE A POSICAO DE SUA EMBARCACAO (Tamanho do tabuleiro: (%i, %i))\n", tabuleiroX, tabuleiroY);
            printf("Linha >> "); scanf("%i", &x);
            printf("Coluna >> "); scanf("%i", &y);
            printf("Orientacao (h ou v) >> "); scanf(" %c", o);
            printf("\nPosicao (%i, %i) em orientacao %s selecionada!\n", x, y, (o == 'h') || (o == 'H') ? "horizontal" : "vertical");

            posicionar(player, x, y, e, o);

            break;

        case 0: // computador

            e = rand() % 3; // total de embarcações é 3
            o = rand() % 2; 
            x = rand() % tabuleiroX;
            y = rand() % tabuleiroY;

            posicionar(player, x, y, e, (o == 0) ? 'h' : 'H');

            break;

        default:
            return 0;
    }

    return 1;
}
