import { memo, SVGProps } from 'react';

const Ellipse18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 33 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <ellipse cx={16.5} cy={17.5} rx={16.5} ry={17.5} fill='url(#pattern0)' stroke='black' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_117_39' transform='matrix(0.0047138 0 0 0.00444444 -0.030303 0)' />
      </pattern>
      <image
        id='image0_117_39'
        width={225}
        height={225}
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAQw0lEQVR4nO3dX2hb5RsH8FP7Z+1IV8v6R9fREdohpKYX7daMbVipoxfBm0YvcjEyYZlUgwi5y4hIbryJQkWQUhHibEFlREEsaZ10yiK2hkJTqrjUjRbS0iZrGxOy6cn2/i7qb5tb0rU9z/s+b06fz52YPec953z7nv/vW8IYUwiR2FPYDSDkCSijRHaUUSI7yiiRXRl2AwiMZDK5vLw8Pz+/uLi4srLS29v74osvYjcKBmW0iK2vr09NTY2Pj4dCod9+++3h/9XY2EgZJWhSqdQ333zz1VdfjY6ObvEbkU3iijJaTH7++eePPvroiy++eOIvVVUV0B4xKKPFYWRk5OzZs9v//d27d/k1RjC6rpdaLpf75JNPSkpKdhRQRVFKS0s5NUk86kfl9fXXX7/++uvJZHIX/7a8vBy8PVgoozKanZ29cOHC5OTkrivs378fsD246Fgvl1wud/Hixfb2di0BVRSlvr4eqknoqB+VyOzs7MmTJzOZjPZSR48e1V5EEtSPyuLDDz9sb28HCaiiKNXV1SB1ZED9KL5cLnf+/PlLly4B1mxubgashquE3nHGlUqlenp6pqenYcvqabdSP4ppaWmpqakJvGx/fz94TUR0PopmcXGRR0AVRTlx4gSPslgooziSyeSRI0c4FT916hSnyigoowgymUxbWxun4g0NDa2trZyKo6CMInj55ZdXV1c5FT9//jynylgoo6K98cYbP/74I7/6r7zyCr/iKOjek1CfffbZa6+9xq++0Wi8ceMGv/ooqB8VZ35+nmtAFUV58803udZHQf2oOI2NjfxOQzclEom6ujquixCP+lFB3nnnHd4B7e/v119AFepHxZidnW1vb+e9lFgsprO7TpuoHxXhwoULvBdht9t1GVCF+lEBdvq53O7otRNVKKO85XI5AZ8Wud3uDz74gPdSsNCxnq+BgQEBS/H5fAKWgoX6UY7EdKLBYLCvr4/3UhBRP8rRp59+ynsRdrtd3wFVqB/lqrq6Gur7pEI2NjZqamq4LgId9aO8jI2N8Q7oxMSE7gOqUEb5GRoa4lrf5/PpZvTGrdGxnotkMsl1FAar1frdd9/xqy8V6ke5GBsb41e8rq7uyy+/5FdfNpRRLgKBAL/iMzMzBoOBX33Z0LEeXiqVevrppzkV1/Ezz0KoH4U3NzfHqXIkEtlrAVUoozz8+uuvPMqGw+HOzk4elSVH45TAGx8fB68ZiUT2ZkAVOh/loaSkBLbgHjwHfRgd64HtbmjwQkwm09ra2l4OqEIZBbe8vAxVyul0zszM1NbWQhUsUnQ+CiydToPUCQQC586dAylV7CijwFZWVjRWMBqN4+Pje/z4/jA61gPTeD46MDBw48YNCujDKKPA7t27t7t/6HQ64/H422+/DdseHaBjPT673X7x4kWz2YzdEElRRoFVVlZu/8der/fcuXN0ZN8aZRTYM88888TfuFyuV199dY+8oawdZRTYoUOHHv5Pg8HQ1tbW1NT03HPPHT9+3Gw2U6+5U/p8FprL5VRVXV9fv3XrVjqd3rxnuW/fvoqKisOHD9fX15eXl5eV8fr73PyM6e7du6WlpaWlpVVVVYDFc7nc6urq9evX4/H43NxcPB5fWlpKp9Oqqt65c6eysrK6urq8vPzQoUMtLS0tLS11dXUtLS1NTU2wzRBJJxnNZDLRaHRubm5mZuaPP/745Zdftv7eraGh4fTp0yaT6fTp02az+ZHOTza3b9+enJz86aefZmZmgsHg7oqYTKaTJ08eO3bMbDZ3dXXx+xMFV8QZzeVyU1NTV65c+fzzz+fn5zVWc7vdvb29XV1d8jx7nJ2dHRsbu3z5ssb5bfPq7u7u6+vr6ekpgvsJrNhks9lQKORwODhtEIvFEggEFhYWUNZOVdVwOOx2uzmtXV4ejycajaKs73YUU0ZjsZjH4xG25zbDmkgkxKxdJBJxu92Ig9wajcbBwcGNjQ0x67t9xZHRcDhss9mwdp7NZgsGg6qq8li1WCzm9/uNRiPW2j3O7XZjHUbykj2jkUiku7sbe6/9y+VyhcNhkPVKJBJDQ0MWiwV7nQrafDYLsrIayZvRWCxmtVqx91R+Pp9vdydw8Xh8eHhYnr+6J/J6vel0Gnzn7oiMGVVV1ev1Yu+dbfF4PJFIJJvNbr1GRRfNRwSDQTG7Pi/pMhoOh4tugAODweBwOILBYCwWu3/ams1mw+Gw3++X+YC+fTabbW1tDSUScmVU5GU7PyaTyWQyYbeCi4mJCfGpkCWjCwsLUl3bkkJ8Pp/gbEiR0VAohL3lyQ7YbDaR8cDPqJhZDQisjo4OYdf7yBkV/NCPADKZTGIewmFm1G63Y29noklDQ4OA3hQto9Lenyc7YjQan3h7WCOcjFIPqicWi4VrWhAy6nK5sLcqAeZyufgFRnRG/X4/9vYkXAwNDXHKjNCM7vo7B1IUIpEIj9iIy2gsFsPehoSvjo4OHskRlFFVVRsaGrC3IeHI7/dzeg1cUEbpOknHTCZTLBbjFx4RGaXH8Trm8Xh454d7RqHGjCUSEvOqHveMOp1O7C1J4BmNRmFfO/HNaCQSwd6YBJ7NZuN0eZQX34zq9XX0vczpdHLNzOM4ZnR4eBh7exJgXq+XX2AK4ZVRVVWxtycBJuASPi9eGR0cHMTepAQS17dGtsYlo9lsFnuTEkhWq5VHTraJy7wi9O6InhiNxsuXLyM2gMv4o9XV1VsPUUuKSDwexx1DGL4fvXr1KgVUN0KhEP4g1+BnD/Shkm4gXic9DPhYn0wm6+vrAQsSRKqqyjBsPvCxfmRkBLYgwRIKhWQIqKJAH+vp4ac+4N5segRkRulrEN2QagoHyGP9Dz/8AFiNYHE6nXJNiAOY9zNnzmCvDQHA9cOPXQDL6NraGva2JQAEj9u4HWDH+qmpKahSBNFbb72F3YRHgWX02rVrUKUIIglnLAfL6OjoKFQpgkXO6VxgnjPR4yV9iEajcl3RK4oC1Y8uLy+D1CG4JAyoApXR6elpkDoEUX9/P3YT8oPJqPbp4wm63t5e7CbkB5PR77//HqQOQSTngV6BumYqKSnRXoQgMhgMq6urVVVV2A3JA6AfXV9f116E4Ors7JQzoApIRm/duqW9CMH1/PPPYzehIICMplIp7UUIruPHj2M3oSCAjC4uLmovQnAdOHAAuwkFAWR0dXVVexGCq7GxEbsJBQFkdGVlRXsRgkvm2QoAMnrnzh3tRQiugwcPYjehIICM/v3339qLEFIIQEaTyaT2IoQUApBRGjlHB556isvodCDofJQoiqLcu3cPuwkFAWT0n3/+0V6EkELk7eGJSDJPowWQUZkfUZBtSiQS2E0oCCCjFRUV2osQXDLfnAHIqMFg0F6E4NJ5Rvft26e9CMH1559/YjehIDofJYqiKJOTk9hNKAggo5WVldqLEFy///47dhMKAsiozK91kW26efPm0tISdivyo2sm8q/r169jNyE/gIw2NTVpL0LQSTuRO0BGZX71kGzfxx9/jN2E/AAyWlNTo70IQSftKSlARvHnQSNAJiYmsJuQB0BGZZnFh2gWCASwm5AHzHtPFosFpA7BdeXKFQkfisJktKenB6QOQSdhVwqTUaPRCFKHoPP5fLlcDrsV/wGT0ba2NpA6BF0mk/n222+xW/EfMGM7Li4uHjlyRHsdIoPW1lapptWE6Ufr6+vpiahuzM/PyzV/NtRkZN3d3dirQiCpqgqVDY3AvrmjS3udee+997Cb8H9QYQ8Gg9irQoAtLCxAxUMLsH60s7MTqhSRRF9fH3YTFAXw+3q6bNKf6enp999/H7sVoPPX2+127LUh8MLhMGBIdgFynBK6bNKlU6dO4T7Eh8zoiRMnAKsReXR1dWEuHrZbxlwTwpPVaoWNyg5CBVuOTkl1zOl0wqZlm4AzKuGbXQSQy+WCDcx2AGd0YWEBezMSvhwOB2xmngg4o4xOSfeA7u5u8NhslSjwil6vF3sbEu46OjoSiQR4ePKCz2g4HMbegESQaDQKnp/HwWdUVVXsTUfECQQC4BF6BHxGGWMulwt70xFx7HZ7Op3mEaRNXDIq51AChKtQKMQjS4xTRmWepILwY7PZYrEYeJy4ZJQx1t/fj73FCA6v17u2tgaYJV4Zpav7Pc7n80HdnOKVUcaYzFOiEzF8Pp/2IHGc546u7onZbNZeBGYMiLzm5+ePHj3KqTgpCul0WvsXRBz70dbWVvrofi9zOBwwn7hpP13YAn3QvJdNTEyApIjjsV5RlFwuV15ezq8+kZbBYFhfXwcZP5nv3OBlZWX0GtTe9O6774IN8A3SG29BqhHYiDCAY5xwzyhjzGazYW8xIhTsB3oiMirt5FSEE9j3S/heM93X2dk5PT0tYEFEBrCh4nvNdB9dOe0dg4ODsAUF9aOKotTX10s4rwoBl81mq6qqAAsK6kcVRRkYGBC2LILF4/HABlQR2Y8qilJSUiJsWQRFPB4Hn5tTXD+qSDk/FQHkcrl4TB4rtB9VFKW6ujqTyYhcIhFmYWGhubkZvKzQflRRlEuXLgleIhHD5XLxCKii8H8W+jiTycRlTQiqeDzOKTAIGaUvm/XH6/XyCwxCRhljVqsVe6sSSMU3BsQT0ctQejIwMMA1LTgZZYy53W7sbUtg8I4KWkZpLBN94DeEzn1oGWX0tVPxEzORA2ZGGWNnzpzB3s5k98RMKIqcURo/v3j5/X4xIUHOKGMM/HVDIoDRaBSWEPyMMsZoqIiiI2aU8U1SZDQej2Nvc7IDXJ8qPU6KjDKafKx4iDzKb5Ilo4w+cS4SIo/ymyTKKN3Vl9/Q0JD4YEiUUUajP8sNa+pluTLKGPP7/dj7guQHO8r99kmXUcaYxWLB3h3kUVADNe6CjBnd2NjA3iPkP0CGtd81GTPK6MRUJoJnWX6cpBlljNGYEZIQNr9yIfJmlDHmcDiwd9BeFw6HsVMgd0ZVVTUajdi7ae8aHBzEjgBjkmeUMZZIJLD31B7ldDqxd/6/ZM8ooyF2MVgsFuzd/kARZJTRVyViGQyGjY0N7H3+QHFklNGr0AKJ+QJk+4omo4wekwoh/rWmJyqmjDLGPB4P9k7UMxnuND2uyDLKKKbcID6R31rxZZTRQZ8DOXvQTaLHyIUyMjJy9uxZ7FY84HA4zGZzS0tLc3NzRUVFTU3N/v37N+dKVVU1m82mUql0Oj03N7e4uDg9PT06Oord5AdisVhrayt2KwrD/iPZPdwxIi0Wi8/nm5iY2PVtmmg0Ojw8jPu812QySXWbKa8izihjLBaLCX5YarVah4eHYV+zUFU1HA57PJ66ujqR6+J2uwHXgp/izihjLJvNOp1O3rvTZDKBR/Nxm2EV07MKGEsMStFndFMoFOK0Lz0ej/hbhmtra4FAoKGhgcca9ff3cx3SFpxOMsoYU1XV5/NB7Ui73S5DTxONRgGnsbTb7bFYDHuddkw/Gd2USCS07FS73R4MBiW8jIhEIl6vt6OjY3fr5fF4ijGdm4r13tPWbt++HQqFhoeHt/MyisVisVqtL7zwwrFjxwwGg4DmabG0tDQ5OXnt2rWrV69uPZV1R0eH1Wp96aWXLBYL+PyIIukzo/dlMpmbN29Go9Hl5eXl5eW//vqrrKzs2WeframpaW5uNpvNBw8erK2txW7mLmUymbW1tVQqtbS0lEwmc7ncgQMHamtrDx8+XNTr9QidZ5TogOh57gjZKcookR1llMiOMkpk9z+CfBXM2iAi5wAAAABJRU5ErkJggg=='
      />
    </defs>
  </svg>
);

const Memo = memo(Ellipse18Icon);
export { Memo as Ellipse18Icon };