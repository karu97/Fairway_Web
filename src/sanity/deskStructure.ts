import { StructureBuilder } from 'sanity/desk';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Hotels
      S.listItem()
        .title('Hotels')
        .child(
          S.list()
            .title('Hotels')
            .items([
              S.listItem()
                .title('All Hotels')
                .child(
                  S.documentList()
                    .title('All Hotels')
                    .filter('_type == "hotel"')
                    .defaultOrdering([{ field: 'featured', direction: 'desc' }, { field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('By Language')
                .child(
                  S.list()
                    .title('Hotels by Language')
                    .items([
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Hotels')
                            .filter('_type == "hotel" && locale == "en"')
                        ),
                      S.listItem()
                        .title('Sinhala')
                        .child(
                          S.documentList()
                            .title('Sinhala Hotels')
                            .filter('_type == "hotel" && locale == "si"')
                        ),
                      S.listItem()
                        .title('Tamil')
                        .child(
                          S.documentList()
                            .title('Tamil Hotels')
                            .filter('_type == "hotel" && locale == "ta"')
                        ),
                    ])
                ),
              S.listItem()
                .title('Featured Hotels')
                .child(
                  S.documentList()
                    .title('Featured Hotels')
                    .filter('_type == "hotel" && featured == true')
                ),
            ])
        ),

      // Tours
      S.listItem()
        .title('Tours')
        .child(
          S.list()
            .title('Tours')
            .items([
              S.listItem()
                .title('All Tours')
                .child(
                  S.documentList()
                    .title('All Tours')
                    .filter('_type == "tour"')
                    .defaultOrdering([{ field: 'featured', direction: 'desc' }, { field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('By Language')
                .child(
                  S.list()
                    .title('Tours by Language')
                    .items([
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Tours')
                            .filter('_type == "tour" && locale == "en"')
                        ),
                      S.listItem()
                        .title('Sinhala')
                        .child(
                          S.documentList()
                            .title('Sinhala Tours')
                            .filter('_type == "tour" && locale == "si"')
                        ),
                      S.listItem()
                        .title('Tamil')
                        .child(
                          S.documentList()
                            .title('Tamil Tours')
                            .filter('_type == "tour" && locale == "ta"')
                        ),
                    ])
                ),
              S.listItem()
                .title('Featured Tours')
                .child(
                  S.documentList()
                    .title('Featured Tours')
                    .filter('_type == "tour" && featured == true')
                ),
            ])
        ),

      // Blog
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('All Posts')
                .child(
                  S.documentList()
                    .title('All Blog Posts')
                    .filter('_type == "blog"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('By Language')
                .child(
                  S.list()
                    .title('Blog Posts by Language')
                    .items([
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Blog Posts')
                            .filter('_type == "blog" && locale == "en"')
                        ),
                      S.listItem()
                        .title('Sinhala')
                        .child(
                          S.documentList()
                            .title('Sinhala Blog Posts')
                            .filter('_type == "blog" && locale == "si"')
                        ),
                      S.listItem()
                        .title('Tamil')
                        .child(
                          S.documentList()
                            .title('Tamil Blog Posts')
                            .filter('_type == "blog" && locale == "ta"')
                        ),
                    ])
                ),
              S.listItem()
                .title('Featured Posts')
                .child(
                  S.documentList()
                    .title('Featured Blog Posts')
                    .filter('_type == "blog" && featured == true')
                ),
              S.listItem()
                .title('By Category')
                .child(
                  S.list()
                    .title('Blog Posts by Category')
                    .items([
                      S.listItem()
                        .title('Travel Guide')
                        .child(
                          S.documentList()
                            .title('Travel Guide Posts')
                            .filter('_type == "blog" && category == "travel-guide"')
                        ),
                      S.listItem()
                        .title('Hotel & Resort')
                        .child(
                          S.documentList()
                            .title('Hotel & Resort Posts')
                            .filter('_type == "blog" && category == "hotel-resort"')
                        ),
                      S.listItem()
                        .title('Tour Packages')
                        .child(
                          S.documentList()
                            .title('Tour Package Posts')
                            .filter('_type == "blog" && category == "tour-packages"')
                        ),
                    ])
                ),
            ])
        ),

      // Locations
      S.listItem()
        .title('Locations')
        .child(
          S.documentList()
            .title('Locations')
            .filter('_type == "location"')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
        ),

      // Authors
      S.listItem()
        .title('Authors')
        .child(
          S.documentList()
            .title('Authors')
            .filter('_type == "author"')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
        ),

      // Deals
      S.listItem()
        .title('Special Deals')
        .child(
          S.list()
            .title('Special Deals')
            .items([
              S.listItem()
                .title('All Deals')
                .child(
                  S.documentList()
                    .title('All Special Deals')
                    .filter('_type == "deal"')
                    .defaultOrdering([{ field: 'featured', direction: 'desc' }, { field: 'startAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Active Deals')
                .child(
                  S.documentList()
                    .title('Active Special Deals')
                    .filter('_type == "deal" && isActive == true')
                ),
              S.listItem()
                .title('Featured Deals')
                .child(
                  S.documentList()
                    .title('Featured Special Deals')
                    .filter('_type == "deal" && featured == true')
                ),
            ])
        ),

      // Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.documentList()
            .title('Site Settings')
            .filter('_type == "settings"')
        ),

      // Divider
      S.divider(),

      // All Documents (for quick access)
      S.listItem()
        .title('All Documents')
        .child(
          S.documentList()
            .title('All Documents')
            .filter('_type in ["hotel", "tour", "blog", "location", "author", "deal", "settings"]')
        ),
    ]);
