# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140530141208) do

  create_table "book_groups", :force => true do |t|
    t.string   "title",      :null => false
    t.string   "author"
    t.string   "publisher"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "book_groups", ["author"], :name => "index_book_groups_on_author"
  add_index "book_groups", ["title"], :name => "index_book_groups_on_title"

  create_table "books", :force => true do |t|
    t.integer  "edition"
    t.string   "isbn"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "user_id"
    t.integer  "college_id"
    t.integer  "price"
    t.integer  "book_group_id"
  end

  add_index "books", ["book_group_id"], :name => "index_books_on_book_group_id"
  add_index "books", ["college_id"], :name => "index_books_on_college_id"
  add_index "books", ["user_id"], :name => "index_books_on_user_id"

  create_table "colleges", :force => true do |t|
    t.string   "name",       :null => false
    t.string   "city"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "first_name",                           :default => "", :null => false
    t.string   "last_name",                            :default => "", :null => false
    t.string   "email",                                :default => "", :null => false
    t.string   "encrypted_password",                   :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        :default => 0,  :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                           :null => false
    t.datetime "updated_at",                                           :null => false
    t.string   "provider"
    t.float    "authid"
    t.string   "mobile",                 :limit => 20
    t.integer  "college_id"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
  end

  add_index "users", ["college_id"], :name => "index_users_on_college_id"
  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
