"use client";
import { useCallback, useEffect, useState } from "react";
import Avatar from "./avatar";
import { Database } from "@/supabase-types";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full items-center sm:p-12 flex-col flex">
      <div className="form-widget sm:w-auto w-full min-w-2xl gap-4 flex flex-col items-center p-8 rounded-lg bg-gray-800">
        <Avatar
          uid={user!.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ fullname, username, website, avatar_url: url });
          }}
        />
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={session?.user.email}
            disabled
            className="bg-black sm:w-80"
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            className="bg-black sm:w-80"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            className="bg-black sm:w-80"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
            className="bg-black sm:w-80"
          />
        </div>

        <div>
          <button
            className="button primary block"
            onClick={() =>
              updateProfile({ fullname, username, website, avatar_url })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
