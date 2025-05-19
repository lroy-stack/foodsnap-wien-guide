export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      abzeichen_definitionen: {
        Row: {
          beschreibung_de: string
          beschreibung_en: string
          erstellt_am: string | null
          icon_url: string
          id: string
          kategorie: string
          level_erforderlich: number | null
          name_de: string
          name_en: string
        }
        Insert: {
          beschreibung_de: string
          beschreibung_en: string
          erstellt_am?: string | null
          icon_url: string
          id: string
          kategorie: string
          level_erforderlich?: number | null
          name_de: string
          name_en: string
        }
        Update: {
          beschreibung_de?: string
          beschreibung_en?: string
          erstellt_am?: string | null
          icon_url?: string
          id?: string
          kategorie?: string
          level_erforderlich?: number | null
          name_de?: string
          name_en?: string
        }
        Relationships: []
      }
      admin_protokoll: {
        Row: {
          admin_id: string
          aktion: string
          details: Json | null
          durchgeführt_am: string | null
          id: string
        }
        Insert: {
          admin_id: string
          aktion: string
          details?: Json | null
          durchgeführt_am?: string | null
          id?: string
        }
        Update: {
          admin_id?: string
          aktion?: string
          details?: Json | null
          durchgeführt_am?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_protokoll_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
        ]
      }
      benutzer_abzeichen: {
        Row: {
          abzeichen_id: string
          benutzer_id: string
          erhalten_am: string | null
          id: string
        }
        Insert: {
          abzeichen_id: string
          benutzer_id: string
          erhalten_am?: string | null
          id?: string
        }
        Update: {
          abzeichen_id?: string
          benutzer_id?: string
          erhalten_am?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "benutzer_abzeichen_abzeichen_id_fkey"
            columns: ["abzeichen_id"]
            isOneToOne: false
            referencedRelation: "abzeichen_definitionen"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "benutzer_abzeichen_benutzer_id_fkey"
            columns: ["benutzer_id"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
        ]
      }
      benutzer_profil: {
        Row: {
          aktualisiert_am: string | null
          anzeigename: string | null
          auth_id: string | null
          benutzername: string
          erstellt_am: string | null
          id: string
          profilbild_url: string | null
          rolle: string | null
          sprache: string | null
        }
        Insert: {
          aktualisiert_am?: string | null
          anzeigename?: string | null
          auth_id?: string | null
          benutzername: string
          erstellt_am?: string | null
          id?: string
          profilbild_url?: string | null
          rolle?: string | null
          sprache?: string | null
        }
        Update: {
          aktualisiert_am?: string | null
          anzeigename?: string | null
          auth_id?: string | null
          benutzername?: string
          erstellt_am?: string | null
          id?: string
          profilbild_url?: string | null
          rolle?: string | null
          sprache?: string | null
        }
        Relationships: []
      }
      benutzer_statistik: {
        Row: {
          aktualisiert_am: string | null
          besuchte_restaurants: number | null
          bewertungen_anzahl: number | null
          fotos_anzahl: number | null
          id: string
          kommentare_anzahl: number | null
          level: number | null
          probierte_gerichte: number | null
          punkte: number | null
        }
        Insert: {
          aktualisiert_am?: string | null
          besuchte_restaurants?: number | null
          bewertungen_anzahl?: number | null
          fotos_anzahl?: number | null
          id: string
          kommentare_anzahl?: number | null
          level?: number | null
          probierte_gerichte?: number | null
          punkte?: number | null
        }
        Update: {
          aktualisiert_am?: string | null
          besuchte_restaurants?: number | null
          bewertungen_anzahl?: number | null
          fotos_anzahl?: number | null
          id?: string
          kommentare_anzahl?: number | null
          level?: number | null
          probierte_gerichte?: number | null
          punkte?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "benutzer_statistik_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
        ]
      }
      bewertungen: {
        Row: {
          aktualisiert_am: string | null
          benutzer_id: string
          bewertung: number
          erstellt_am: string | null
          foto_id: string | null
          foto_url: string | null
          gericht_id: string | null
          gericht_restaurant_id: string | null
          id: string
          kommentar: string | null
          restaurant_id: string | null
        }
        Insert: {
          aktualisiert_am?: string | null
          benutzer_id: string
          bewertung: number
          erstellt_am?: string | null
          foto_id?: string | null
          foto_url?: string | null
          gericht_id?: string | null
          gericht_restaurant_id?: string | null
          id?: string
          kommentar?: string | null
          restaurant_id?: string | null
        }
        Update: {
          aktualisiert_am?: string | null
          benutzer_id?: string
          bewertung?: number
          erstellt_am?: string | null
          foto_id?: string | null
          foto_url?: string | null
          gericht_id?: string | null
          gericht_restaurant_id?: string | null
          id?: string
          kommentar?: string | null
          restaurant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bewertungen_benutzer_id_fkey"
            columns: ["benutzer_id"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bewertungen_foto_id_fkey"
            columns: ["foto_id"]
            isOneToOne: false
            referencedRelation: "fotos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bewertungen_gericht_id_fkey"
            columns: ["gericht_id"]
            isOneToOne: false
            referencedRelation: "gerichte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bewertungen_gericht_restaurant_id_fkey"
            columns: ["gericht_restaurant_id"]
            isOneToOne: false
            referencedRelation: "gericht_restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bewertungen_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      fotos: {
        Row: {
          aufgenommen_am: string | null
          benutzer_id: string
          beschreibung: string | null
          bewertung_id: string | null
          foto_url: string
          gericht_id: string | null
          gericht_restaurant_id: string | null
          hochgeladen_am: string | null
          id: string
          is_hauptbild: boolean | null
          ist_genehmigt: boolean | null
          restaurant_id: string | null
        }
        Insert: {
          aufgenommen_am?: string | null
          benutzer_id: string
          beschreibung?: string | null
          bewertung_id?: string | null
          foto_url: string
          gericht_id?: string | null
          gericht_restaurant_id?: string | null
          hochgeladen_am?: string | null
          id?: string
          is_hauptbild?: boolean | null
          ist_genehmigt?: boolean | null
          restaurant_id?: string | null
        }
        Update: {
          aufgenommen_am?: string | null
          benutzer_id?: string
          beschreibung?: string | null
          bewertung_id?: string | null
          foto_url?: string
          gericht_id?: string | null
          gericht_restaurant_id?: string | null
          hochgeladen_am?: string | null
          id?: string
          is_hauptbild?: boolean | null
          ist_genehmigt?: boolean | null
          restaurant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fotos_benutzer_id_fkey"
            columns: ["benutzer_id"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fotos_bewertung_id_fkey"
            columns: ["bewertung_id"]
            isOneToOne: false
            referencedRelation: "bewertungen"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fotos_gericht_id_fkey"
            columns: ["gericht_id"]
            isOneToOne: false
            referencedRelation: "gerichte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fotos_gericht_restaurant_id_fkey"
            columns: ["gericht_restaurant_id"]
            isOneToOne: false
            referencedRelation: "gericht_restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fotos_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      gericht_restaurant: {
        Row: {
          erstellt_am: string | null
          gericht_id: string
          id: string
          preis: number | null
          restaurant_id: string
          spezielle_notizen: string | null
          verfügbar: boolean | null
        }
        Insert: {
          erstellt_am?: string | null
          gericht_id: string
          id?: string
          preis?: number | null
          restaurant_id: string
          spezielle_notizen?: string | null
          verfügbar?: boolean | null
        }
        Update: {
          erstellt_am?: string | null
          gericht_id?: string
          id?: string
          preis?: number | null
          restaurant_id?: string
          spezielle_notizen?: string | null
          verfügbar?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "gericht_restaurant_gericht_id_fkey"
            columns: ["gericht_id"]
            isOneToOne: false
            referencedRelation: "gerichte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gericht_restaurant_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      gerichte: {
        Row: {
          aktualisiert_am: string | null
          beliebtheit: number | null
          beschreibung_de: string | null
          beschreibung_en: string | null
          bild_url: string | null
          erstellt_am: string | null
          erstellt_von: string | null
          herkunft: string | null
          id: string
          kategorie: string
          name_de: string
          name_en: string
          preisklasse: number | null
        }
        Insert: {
          aktualisiert_am?: string | null
          beliebtheit?: number | null
          beschreibung_de?: string | null
          beschreibung_en?: string | null
          bild_url?: string | null
          erstellt_am?: string | null
          erstellt_von?: string | null
          herkunft?: string | null
          id?: string
          kategorie: string
          name_de: string
          name_en: string
          preisklasse?: number | null
        }
        Update: {
          aktualisiert_am?: string | null
          beliebtheit?: number | null
          beschreibung_de?: string | null
          beschreibung_en?: string | null
          bild_url?: string | null
          erstellt_am?: string | null
          erstellt_von?: string | null
          herkunft?: string | null
          id?: string
          kategorie?: string
          name_de?: string
          name_en?: string
          preisklasse?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gerichte_erstellt_von_fkey"
            columns: ["erstellt_von"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
        ]
      }
      health_check: {
        Row: {
          created_at: string | null
          id: string
          status: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string
        }
        Relationships: []
      }
      restaurants: {
        Row: {
          adresse: string
          aktualisiert_am: string | null
          bewertung: number | null
          bezirk: string | null
          description: string | null
          erstellt_am: string | null
          erstellt_von: string | null
          id: string
          kontaktdaten: Json | null
          koordinaten: unknown
          name: string
          oeffnungszeiten: Json | null
          opening_hours: string | null
          phone: string | null
          preisklasse: number | null
          website: string | null
        }
        Insert: {
          adresse: string
          aktualisiert_am?: string | null
          bewertung?: number | null
          bezirk?: string | null
          description?: string | null
          erstellt_am?: string | null
          erstellt_von?: string | null
          id?: string
          kontaktdaten?: Json | null
          koordinaten: unknown
          name: string
          oeffnungszeiten?: Json | null
          opening_hours?: string | null
          phone?: string | null
          preisklasse?: number | null
          website?: string | null
        }
        Update: {
          adresse?: string
          aktualisiert_am?: string | null
          bewertung?: number | null
          bezirk?: string | null
          description?: string | null
          erstellt_am?: string | null
          erstellt_von?: string | null
          id?: string
          kontaktdaten?: Json | null
          koordinaten?: unknown
          name?: string
          oeffnungszeiten?: Json | null
          opening_hours?: string | null
          phone?: string | null
          preisklasse?: number | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restaurants_erstellt_von_fkey"
            columns: ["erstellt_von"]
            isOneToOne: false
            referencedRelation: "benutzer_profil"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      gericht_bewertungen: {
        Row: {
          anzahl_bewertungen: number | null
          durchschnittliche_bewertung: number | null
          gericht_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bewertungen_gericht_id_fkey"
            columns: ["gericht_id"]
            isOneToOne: false
            referencedRelation: "gerichte"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurant_bewertungen: {
        Row: {
          anzahl_bewertungen: number | null
          durchschnittliche_bewertung: number | null
          restaurant_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bewertungen_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      log_admin_action: {
        Args: { admin_id: string; action_text: string; details_json: Json }
        Returns: undefined
      }
      set_user_role: {
        Args: { target_user_email: string; new_role: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
